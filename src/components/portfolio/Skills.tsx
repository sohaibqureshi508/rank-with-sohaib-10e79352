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
    <section id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">SEO Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            SEO Expertise &amp; Strategy
          </p>
          <p className="mt-4 text-gray-600">
            Full-stack search engine optimisation as an SEO specialist and SEO consultant — built around organic search growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 border-blue-100">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-blue-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
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
