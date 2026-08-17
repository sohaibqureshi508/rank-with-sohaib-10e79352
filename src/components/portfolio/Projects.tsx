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
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">Live Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-World Impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-gray-50 text-gray-600 rounded-full">
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
