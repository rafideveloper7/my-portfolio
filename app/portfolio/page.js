import Container from "@/components/Container";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Portfolio",
  description: "Filterable portfolio of web apps, dashboards, e-commerce systems, and REST API project structures by Rafi Ullah."
};

export default function PortfolioPage() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader eyebrow="Portfolio" title="Full-stack project structures ready for real-world builds." text="Browse web apps, dashboards, e-commerce systems, APIs, and business website projects designed for clean implementation and future expansion." />
          <div className="m-10 p-16">
            <PortfolioGrid className="" />
          </div>
        </Container>
      </section>
    </main>
  );
}
