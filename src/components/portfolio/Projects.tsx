export function Projects() {
  const projects = [
    {
      title: "All New Jobs Pakistan",
      url: "allnewjobspakistan.com",
      description: "Managing SEO for one of Pakistan's leading job portals, focusing on high-volume keywords and search intent analysis.",
      tags: ["On-Page", "Technical SEO", "Growth"]
    },
    {
      title: "Ramedivia",
      url: "ramedivia.com",
      description: "Optimizing the digital presence and search visibility for the Ramedivia platform.",
      tags: ["Optimization", "Search Visibility", "Strategy"]
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Case Studies</h2>
          <p className="text-4xl font-black tracking-tight text-foreground sm:text-6xl uppercase leading-none">
            REAL-WORLD IMPACT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-10 bg-white border border-border rounded-3xl transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-zinc-50 border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">View Live Project</span>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-tight">{project.title}</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">{project.description}</p>
              
              <div className="mt-auto flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-50 text-muted-foreground border border-border rounded-full group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
