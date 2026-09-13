import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { profile } from "@/data/profile";
import { container, eyebrow, proseHeading, proseP, sectionPad } from "@/lib/styles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      url: `${profile.siteUrl}/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: profile.name },
    description: post.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={`${container} max-w-[72ch]`}>
          <span className={eyebrow}>{post.category}</span>
          <h1 className="text-[clamp(28px,4.4vw,44px)] font-semibold leading-[1.15]">{post.title}</h1>
          <p className="mt-3.5 font-mono text-xs text-[var(--ink-soft)]">{formatDate(post.date)}</p>
        </div>
      </section>
      <section className={sectionPad}>
        <div className={`${container} max-w-[72ch]`}>
          <p className={proseP}>{post.excerpt}</p>
          {post.body.map((para, i) =>
            para.startsWith("## ") ? (
              <h2 key={i} className={proseHeading}>{para.slice(3)}</h2>
            ) : (
              <p key={i} className={proseP}>{para}</p>
            )
          )}
          <p className="mt-10">
            <Link href="/blog" className="text-[var(--accent)]">&larr; Back to all posts</Link>
          </p>
        </div>
      </section>
    </>
  );
}
