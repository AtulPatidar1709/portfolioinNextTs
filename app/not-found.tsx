import Link from "next/link";
import { btnPrimary, container } from "@/lib/styles";

export default function NotFound() {
  return (
    <section className="py-[120px] text-center">
      <div className={container}>
        <h2 className="text-[clamp(30px,4vw,44px)] font-semibold">Page not found</h2>
        <p className="mx-auto mt-4.5 max-w-[46ch] text-[var(--ink-soft)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-7 flex justify-center">
          <Link href="/" className={btnPrimary}>Back to home</Link>
        </div>
      </div>
    </section>
  );
}
