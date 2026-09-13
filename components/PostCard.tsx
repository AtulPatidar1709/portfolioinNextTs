import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-3 rounded-md border border-[var(--line)] bg-[var(--bg-raised)] p-6.5 transition-colors hover:border-[var(--accent)]"
    >
      <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
        {post.category} &middot; {formatDate(post.date)}
      </span>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-[14.5px] text-[var(--ink-soft)]">{post.excerpt}</p>
    </Link>
  );
}
