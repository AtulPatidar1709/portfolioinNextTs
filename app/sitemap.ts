import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/work`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPages];
}
