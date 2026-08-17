import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { DeploymentGuide } from "@/components/portfolio/DeploymentGuide";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Sohaib Qureshi | SEO Expert Portfolio",
    meta: [
      {
        name: "description",
        content: "Professional SEO Expert with 1+ years of experience specializing in Keyword Research, On-Page, Off-Page, and Technical SEO.",
      },
      { property: "og:title", content: "Sohaib Qureshi | SEO Expert Portfolio" },
      {
        property: "og:description",
        content: "Professional SEO Expert specializing in organic growth and data-driven optimization.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-gray-900 selection:bg-blue-100">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xl font-bold tracking-tight text-blue-600">SQ.</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#guide" className="hover:text-blue-600 transition-colors">Deployment Guide</a>
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
          <p>© {new Date().getFullYear()} Sohaib Qureshi. Built with Lovable.</p>
        </div>
      </footer>
    </div>
  );
}
