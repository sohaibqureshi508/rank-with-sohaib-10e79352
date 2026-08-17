export function Experience() {
  const experiences = [
    {
      role: "SEO Expert",
      company: "Skills Era Company",
      type: "Remote / Hybrid",
      period: "2026 – Present",
      description: "Leading comprehensive SEO strategies for business growth.",
      highlights: [
        "Advanced On-page & Technical SEO optimization",
        "Strategic Keyword Research & Competitor Analysis",
        "Driving organic traffic growth through data-driven decisions"
      ]
    },
    {
      role: "SEO Expert (Previously SEO Intern)",
      company: "All New Jobs Pakistan",
      type: "Remote",
      period: "2026 – Present",
      description: "Managing full-cycle SEO for a high-traffic job portal.",
      highlights: [
        "Title tag & Meta description optimization for thousands of pages",
        "Off-page strategies: Link building, directory, and image submissions",
        "Technical SEO: Site structure, crawlability, and indexing management",
        "Promoted from Intern to Expert due to exceptional performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">Case Studies</h2>
            <p className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl uppercase">
              PROFESSIONAL <br />EXPERIENCE
            </p>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Delivering measurable search results through technical precision and strategic content planning.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-4xl bg-background border border-border/50 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-primary/20">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-[10px] font-black tracking-widest text-white uppercase mb-4">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-foreground">{exp.role}</h3>
                <p className="mt-2 text-sm font-bold text-primary/70 uppercase tracking-wider">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase">{exp.type}</p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0 md:pl-8">
                <p className="text-foreground font-bold leading-relaxed mb-6 italic">"{exp.description}"</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground leading-snug">
                      <span className="mr-2 text-primary font-black mt-1">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
