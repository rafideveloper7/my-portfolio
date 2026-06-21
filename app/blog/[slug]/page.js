// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Container from "@/components/Container";
import BlogImage from "@/components/BlogImage";
import { posts } from "@/data/blog";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="pt-28">
      <article className="section-pad">
        <Container>
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-lime mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {post.excerpt}
            </p>
          </header>

          {/* Divider */}
          <div className="my-10 h-px w-full max-w-3xl bg-line" />

          {/* Image - Rendered here for center, left, right positions */}
          {post.image && (
            <BlogImage image={post.image} className="mb-10" />
          )}

          {/* Content */}
          {post.content ? (
            <div 
              className="prose prose-invert prose-lg max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-muted">No content available for this post.</p>
          )}

          {/* Footer with navigation */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-lime"
            >
              <ArrowLeft size={16} />
              All Articles
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-black text-ink transition hover:bg-lime/80 border-2 border-ink-600"
            >
              Discuss this topic
            </Link>
          </div>
        </Container>
      </article>
    </main>
  );
}