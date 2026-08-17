import { Button } from "@/components/ui/button";
import photo from "@/assets/sohaib.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
              Rank With Sohaib — SEO Services
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Rank With Sohaib: <br />
              <span className="text-blue-600">SEO Expert &amp; Consultant</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              I'm <span className="font-semibold text-gray-900">Sohaib Qureshi</span>, a freelance SEO expert and SEO specialist in Pakistan with 1+ years of experience in Technical SEO, On-Page SEO, Local SEO, Keyword Research, SEO Audits and AI SEO — driving organic search growth with data-driven SEO strategy.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#experience">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/sohaibqureshi508"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sohaib Qureshi on GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.23-2.58 5.16-5.03 5.43.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53A11.02 11.02 0 0 0 23.01 11.5C23.01 5.24 18.27.5 12 .5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sohaib Qureshi on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100/60 blur-2xl" aria-hidden="true" />
              <img
                src={photo.url}
                alt="Sohaib Qureshi, SEO Expert and SEO Consultant in Pakistan"
                width={480}
                height={480}
                className="relative w-72 rounded-[2rem] border border-gray-100 bg-white object-cover shadow-xl sm:w-96"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 -z-10 h-full w-full opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
      </div>
    </section>
  );
}
