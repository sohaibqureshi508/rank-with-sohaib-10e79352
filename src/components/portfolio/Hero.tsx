import { Button } from "@/components/ui/button";
import photo from "@/assets/sohaib.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-52 lg:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary ring-1 ring-inset ring-primary/10">
                SEO Expert & Consultant
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl lg:leading-[1.1]">
              RANK WITH <br />
              <span className="text-primary">SOHAIB</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm <span className="font-bold text-foreground underline decoration-primary/30 decoration-4 underline-offset-4">Sohaib Qureshi</span>, a freelance SEO specialist in Pakistan driving organic growth with Technical SEO, On-Page strategies, and AI-driven insights.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
              <Button size="lg" className="h-14 rounded-full px-10 text-base font-bold transition-transform hover:scale-105" asChild>
                <a href="#experience">EXPLORE WORK</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full border-2 px-10 text-base font-bold transition-transform hover:scale-105" asChild>
                <a href="#contact">GET IN TOUCH</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/5 blur-2xl" aria-hidden="true" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-border bg-white p-2 shadow-xl">
                <img
                  src={photo.url}
                  alt="Sohaib Qureshi, SEO Expert and SEO Consultant in Pakistan"
                  className="h-full w-full rounded-[2.2rem] object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-full bg-primary p-4 text-center text-[10px] font-black leading-tight text-white shadow-xl lg:flex uppercase tracking-tighter">
                1+ Years Expertise
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 -z-10 h-full w-full overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </section>
  );
}
