import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { LocalSeo } from "@/components/portfolio/LocalSeo";
import { Contact } from "@/components/portfolio/Contact";
import { DeploymentGuide } from "@/components/portfolio/DeploymentGuide";

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
    <div className="min-h-screen bg-[#fcfbf8] text-gray-900 selection:bg-blue-100">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xl font-bold tracking-tight text-blue-600">Rank With Sohaib</span>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#experience" className="hidden hover:text-blue-600 transition-colors sm:inline">Experience</a>
            <a href="#projects" className="hidden hover:text-blue-600 transition-colors sm:inline">Projects</a>
            <a href="#skills" className="hidden hover:text-blue-600 transition-colors sm:inline">SEO Services</a>
            <a href="#guide" className="hidden hover:text-blue-600 transition-colors lg:inline">Deployment Guide</a>
            <a
              href="https://github.com/sohaibqureshi508"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <DeploymentGuide />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          <p className="mb-3">
            <a href="https://github.com/sohaibqureshi508" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
            <span className="mx-3">·</span>
            <a href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          </p>
          <p>© {new Date().getFullYear()} Rank With Sohaib — Sohaib Qureshi, SEO Expert in Pakistan.</p>
        </div>
      </footer>
    </div>
  );
}
