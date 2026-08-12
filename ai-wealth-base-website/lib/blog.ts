// Blog data is pre-generated at build time by scripts/generate-blog.mjs.
import blogData from "./generated/blog-data.json";

export interface TocItem {
  level: 2 | 3;
  text: string;
  id: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  tags: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
  toc: TocItem[];
}

const posts = blogData.posts as unknown as Post[];

export function getAllPostsMeta(): PostMeta[] {
  return posts.map(({ slug, title, date, formattedDate, excerpt, coverImage, author, tags }) => ({
    slug,
    title,
    date,
    formattedDate,
    excerpt,
    coverImage: coverImage ?? undefined,
    author,
    tags,
  }));
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, coverImage: post.coverImage ?? undefined };
}
