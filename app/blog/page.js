// app/blog/page.js
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { posts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "Web development articles about MERN applications, Next.js performance, and secure REST API foundations."
};

export default function BlogPage() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader 
            eyebrow="Blog" 
            title="Practical notes on full-stack development." 
            text="Short, launch-ready articles about building faster, cleaner, and more secure web applications." 
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="flex h-full flex-col rounded-[1.25rem] border border-line bg-coal p-6 transition hover:border-lime hover:shadow-lg group">
                    <p className="text-xs font-black uppercase tracking-[.16em] text-lime">
                      {post.date} / {post.readTime}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-black leading-tight group-hover:text-lime transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-4 flex-1 leading-7 text-muted">{post.excerpt}</p>
                    <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black text-lime transition group-hover:gap-3">
                      Read More <ArrowUpRight size={16} />
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}