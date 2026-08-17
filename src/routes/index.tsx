import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { LocalSeo } from "@/components/portfolio/LocalSeo";
import { Contact } from "@/components/portfolio/Contact";

const TITLE = "Rank With Sohaib | SEO Expert & SEO Consultant in Pakistan";
const DESCRIPTION =
  "Rank With Sohaib — Sohaib Qureshi, freelance SEO expert and SEO specialist in Pakistan offering SEO services: Technical SEO, On-Page SEO, Local SEO, Keyword Research, SEO Audit and AI SEO.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Rank With Sohaib, SEO Expert, SEO Specialist, SEO Consultant, SEO Services, Search Engine Optimisation, SEO Strategy, Organic Search, Technical SEO, On-Page SEO, Local SEO, Keyword Research, SEO Audit, AI SEO, Rank With Sohaib SEO Services, Sohaib Qureshi SEO Expert, SEO Expert in Pakistan, SEO Specialist in Pakistan, Freelance SEO Expert in Pakistan",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sohaib Qureshi",
          alternateName: "Rank With Sohaib",
          jobTitle: "SEO Expert",
          description: DESCRIPTION,
          address: { "@type": "PostalAddress", addressLocality: "Multan", addressCountry: "PK" },
          email: "sohaibqureshi4410@gmail.com",
          telephone: "+92 300 8974410",
          knowsAbout: [
            "Search Engine Optimisation",
            "Technical SEO",
            "On-Page SEO",
            "Off-Page SEO",
            "Local SEO",
            "Keyword Research",
            "SEO Audit",
            "AI SEO",
            "SEO Strategy",
            "Organic Search",
          ],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "Keyword Research Essentials with Semrush",
              credentialCategory: "certificate",
              identifier: "33634549bd",
              recognizedBy: { "@type": "Organization", name: "Semrush Academy" },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "On-Page SEO and AI Search Essentials with Semrush",
              credentialCategory: "certificate",
              identifier: "34b3570471",
              recognizedBy: { "@type": "Organization", name: "Semrush Academy" },
            },
          ],
          sameAs: [
            "https://github.com/sohaibqureshi508",
            "https://www.linkedin.com/in/sohaib-qureshi-seo-services/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xl font-black tracking-tighter text-primary">RANK WITH SOHAIB</span>
          <div className="flex items-center gap-8 text-sm font-semibold">
            <a href="#experience" className="hidden hover:text-primary transition-colors sm:inline uppercase tracking-wider">Experience</a>
            <a href="#projects" className="hidden hover:text-primary transition-colors sm:inline uppercase tracking-wider">Projects</a>
            <a href="#skills" className="hidden hover:text-primary transition-colors sm:inline uppercase tracking-wider">SEO Services</a>
            <a
              href="https://github.com/sohaibqureshi508"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LI
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="bg-background">
          <Hero />
        </div>
        <div className="bg-white border-y border-border/50 shadow-inner">
          <Experience />
        </div>
        <div className="bg-background">
          <Projects />
        </div>
        <div className="bg-zinc-900 text-white dark:bg-zinc-950">
          <Skills />
        </div>
        <div className="bg-white border-y border-border/50">
          <LocalSeo />
        </div>
        <div className="bg-background">
          <Certifications />
        </div>
        <div className="bg-primary text-white">
          <Contact />
        </div>
      </main>

      <footer className="bg-background border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm font-medium text-muted-foreground sm:px-6 lg:px-8">
          <p className="mb-4 flex justify-center gap-6">
            <a href="https://github.com/sohaibqureshi508" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </p>
          <p className="uppercase tracking-widest text-[10px] opacity-60">© {new Date().getFullYear()} Rank With Sohaib — SEO Expert Multan, Pakistan.</p>
        </div>
      </footer>
    </div>
  );
}