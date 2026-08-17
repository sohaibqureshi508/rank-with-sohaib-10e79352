import certKeyword from "@/assets/cert-keyword-research.pdf.asset.json";
import certOnPage from "@/assets/cert-onpage-ai.pdf.asset.json";

export function Certifications() {
  const certificates = [
    {
      title: "Keyword Research Essentials with Semrush",
      issuer: "Semrush Academy",
      id: "33634549bd",
      valid: "Valid until 13 June 2027",
      url: certKeyword.url,
      skills: ["Keyword Research", "Search Intent", "Semrush"],
    },
    {
      title: "On-Page SEO and AI Search Essentials with Semrush",
      issuer: "Semrush Academy",
      id: "34b3570471",
      valid: "Valid until 30 June 2027",
      url: certOnPage.url,
      skills: ["On-Page SEO", "AI SEO", "Semrush"],
    },
  ];

  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Verified Skills</h2>
          <p className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl uppercase leading-none">
            SEMRUSH <br />CERTIFIED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col p-10 rounded-[3rem] bg-white border-2 border-border/50 transition-all duration-500 hover:border-primary hover:shadow-2xl"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="h-12 px-4 flex items-center justify-center rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
                  {cert.issuer}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
                  ID: {cert.id}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-4 leading-tight">{cert.title}</h3>
              <p className="text-sm font-bold text-primary/70 uppercase tracking-widest mb-8">{cert.valid}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {cert.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-zinc-50 text-muted-foreground border border-border rounded-full group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all"
              >
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
