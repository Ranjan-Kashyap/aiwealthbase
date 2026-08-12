import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://aiwealthbase.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-[14px] text-mint hover:underline">
          ← Blog
        </Link>
        <p className="mt-6 text-[13px] text-[rgba(255,255,255,0.45)]">
          {post.formattedDate} · {post.author}
        </p>
        <h1 className="mt-3 text-[clamp(1.85rem,4vw,2.75rem)] font-bold leading-tight text-white">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-semibold uppercase tracking-wide text-mint">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div
          className="prose-awb mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="mt-14 rounded-xl border border-[rgba(255,255,255,0.08)] bg-slate p-6 text-center">
          <p className="text-[16px] font-medium text-white">Want the practical stack?</p>
          <Link
            href="/free-checklist"
            className="mt-4 inline-flex rounded-lg bg-mint px-5 py-2.5 text-[15px] font-semibold text-navy hover:brightness-110"
          >
            Get the Free Checklist
          </Link>
        </div>
      </div>
    </article>
  );
}
