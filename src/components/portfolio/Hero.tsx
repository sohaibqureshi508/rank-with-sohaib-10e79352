import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Driving Organic Growth with <br />
            <span className="text-blue-600">Data-Driven SEO</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            I'm <span className="font-semibold text-gray-900">Sohaib Qureshi</span>, an SEO Expert with 1+ years of experience helping businesses dominate search rankings through strategic optimization.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#experience">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 -z-10 h-full w-full opacity-30">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl"></div>
      </div>
    </section>
  );
}
