import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl uppercase mb-8">
            Ready to <span className="text-primary italic">Rank</span>?
          </h2>
          <p className="mt-6 text-xl font-bold text-white/60 max-w-2xl mx-auto uppercase tracking-wide">
            AVAILABLE FOR REMOTE SEO ROLES, FREELANCE CONSULTATIONS, AND TECHNICAL AUDITS.
          </p>

          <div className="mt-20 flex flex-col items-center gap-12">
            <a href="mailto:sohaibqureshi4410@gmail.com" className="group text-3xl sm:text-5xl font-bold tracking-tight text-white hover:text-primary transition-all border-b-2 border-white/10 pb-4">
              sohaibqureshi4410<span className="text-white/40 group-hover:text-primary transition-colors">@gmail.com</span>
            </a>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="h-16 rounded-full bg-white text-primary px-10 text-lg font-black hover:bg-white/90 uppercase tracking-widest transition-transform hover:scale-105" asChild>
                <a href="tel:+923008974410">Call Now</a>
              </Button>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sohaibqureshi508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-white/30 text-white transition-all hover:bg-white hover:text-primary hover:border-white"
                >
                  <span className="font-black text-xs uppercase">GH</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-white/30 text-white transition-all hover:bg-white hover:text-primary hover:border-white"
                >
                  <span className="font-black text-xs uppercase">LI</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-2">Location</p>
              <p className="text-2xl font-black text-white uppercase tracking-tighter">Multan, Pakistan</p>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-2">Primary Keyword</p>
              <p className="text-2xl font-black text-white uppercase tracking-tighter italic">Rank With Sohaib</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black leading-none uppercase tracking-tighter select-none">
          RANKING
        </div>
      </div>
    </section>

  );
}
