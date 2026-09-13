import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import PostCard from "@/components/PostCard";
import { container, eyebrow, sectionPad } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Blog — Engineering Notes on React, Node.js & Backend Systems",
  description: "Short write-ups on frontend engineering, backend systems, and API design from real production projects.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <section className="pb-0 pt-10 sm:pt-14 lg:pt-[76px]">
        <div className={container}>
          <span className={eyebrow}>Blog &mdash; 05</span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-semibold leading-[1.1]">
            Notes on building
            <br />
            web products.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[17.5px] text-[var(--ink-soft)]">
            Short write-ups on the engineering problems I run into &mdash; mostly React, Node.js,
            and API design. New posts added as they&rsquo;re written.
          </p>
        </div>
      </section>
      <section className={sectionPad}>
        <div className={container}>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
            {sorted.map((post) => (
              <PostCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
