// app/thank-you/page.js
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting us. We'll get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <main className="pt-28">
      <section className="section-pad min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-lime/20 text-lime mb-6">
              <CheckCircle size={40} />
            </div>
            <h1 className="font-display text-4xl font-black sm:text-5xl">
              Thank You!
            </h1>
            <p className="mt-4 text-lg text-muted">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/">Back to Home</Button>
              <Button href="/portfolio" variant="secondary">View Portfolio</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}