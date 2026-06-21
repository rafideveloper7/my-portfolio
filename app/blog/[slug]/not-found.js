// app/blog/[slug]/not-found.js
import Link from "next/link";
import Container from "@/components/Container";

export default function BlogPostNotFound() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <div className="text-center">
            <h1 className="font-display text-4xl font-black">Post Not Found</h1>
            <p className="mt-4 text-muted">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-full bg-lime px-6 py-2.5 text-sm font-black text-ink transition hover:bg-lime/80"
            >
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}