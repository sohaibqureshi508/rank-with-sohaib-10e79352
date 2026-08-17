export function LocalSeo() {
  const work = [
    {
      title: "Google Business Profile Setup",
      description:
        "Created and verified a Google Business Profile (GMB) for SEO services in Pakistan — categories, services, service areas, business hours and description optimised around SEO Expert and SEO Consultant search terms.",
    },
    {
      title: "Google Maps Optimisation",
      description:
        "Google Maps listing set up with accurate NAP (name, address, phone), map pin placement and geo-targeting so local clients in Multan and across Pakistan can find and contact the service directly from Maps.",
    },
    {
      title: "Local Citations & Directories",
      description:
        "Consistent NAP citations built across local business directories and profile sites to strengthen local authority and improve map pack visibility.",
    },
    {
      title: "Local Keyword Targeting",
      description:
        "Local SEO strategy built around location keywords such as SEO Expert in Pakistan, SEO Specialist in Pakistan and Freelance SEO Expert in Pakistan.",
    },
  ];

  return (
    <section id="local-seo" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Market Dominance</h2>
            <p className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl uppercase leading-none mb-8">
              LOCAL SEO <br />& GMB MASTERY
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-md">
              Dominating the Pakistan market through hyper-local Google Business Profile optimization and strategic map placement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {work.map((item, index) => (
              <div 
                key={item.title} 
                className="group p-8 rounded-[2.5rem] bg-zinc-50 border border-border/50 transition-all hover:bg-white hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-black text-primary/40 group-hover:text-primary transition-colors">0{index + 1}</span>
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
