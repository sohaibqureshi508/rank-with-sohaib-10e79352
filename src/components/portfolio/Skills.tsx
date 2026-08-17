export function Skills() {
  const skillCategories = [
    {
      title: "On-Page SEO",
      skills: ["Title Tag Optimization", "Meta Descriptions", "Header Tag Structuring", "Content Optimization", "Image Alt Text"]
    },
    {
      title: "Technical SEO",
      skills: ["Site Structure", "Crawlability & Indexing", "Core Web Vitals", "XML Sitemaps", "Robots.txt"]
    },
    {
      title: "Off-Page & Local SEO",
      skills: ["PBN Link Building", "Directory Submissions", "Local SEO Citations", "Profile Creation", "Bookmarking"]
    },
    {
      title: "Research, Audit & AI SEO",
      skills: ["Keyword Research", "SEO Audit", "Competitor Analysis", "Search Intent Analysis", "AI SEO & SEMrush"]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-6">Expertise Stack</h2>
          <p className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase leading-none">
            SEO STRATEGY & EXECUTION
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 transition-opacity group-hover:opacity-20 leading-none">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-white/70">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
