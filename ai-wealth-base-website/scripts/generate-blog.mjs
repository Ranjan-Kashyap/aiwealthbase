/**
 * Build-time script: reads all markdown posts from content/blog/,
 * runs them through the full unified/shiki pipeline, and writes
 * the result to lib/generated/blog-data.json.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const OUT_FILE = path.join(ROOT, "lib", "generated", "blog-data.json");

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function slugFromFilename(filename) {
  return filename.replace(/\.(md|mdx)$/, "");
}

function toAnchorId(text) {
  return text
    .toLowerCase()
    .replace(/[*_`[\]()]/g, "")
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
}

function extractToc(markdown) {
  const items = [];
  let inCodeBlock = false;

  for (const line of markdown.split("\n")) {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const h2 = line.match(/^## (.+)/);
    const h3 = line.match(/^### (.+)/);

    if (h2) {
      items.push({ level: 2, text: h2[1].replace(/[*_`[\]()]/g, "").trim(), id: toAnchorId(h2[1]) });
    } else if (h3) {
      items.push({ level: 3, text: h3[1].replace(/[*_`[\]()]/g, "").trim(), id: toAnchorId(h3[1]) });
    }
  }

  return items;
}

async function processPost(filename) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  const slug = data.slug ?? slugFromFilename(filename);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, { theme: "one-dark-pro", keepBackground: false })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "append" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ? String(data.date) : "",
    formattedDate: data.date ? formatDate(String(data.date)) : "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? null,
    author: data.author ?? "AI Wealth Base",
    tags: data.tags ?? [],
    toc: extractToc(content),
    contentHtml: String(processed),
  };
}

async function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log("[generate-blog] content/blog/ not found — writing empty data.");
    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify({ posts: [] }, null, 2));
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.(md|mdx)$/.test(f));

  if (files.length === 0) {
    console.log("[generate-blog] No markdown files found — writing empty data.");
    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify({ posts: [] }, null, 2));
    return;
  }

  console.log(`[generate-blog] Processing ${files.length} post(s)…`);
  const posts = await Promise.all(files.map(processPost));
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify({ posts }, null, 2));
  console.log(`[generate-blog] Done. Wrote ${posts.length} post(s) to lib/generated/blog-data.json`);
}

main().catch((err) => {
  console.error("[generate-blog] Error:", err);
  process.exit(1);
});
