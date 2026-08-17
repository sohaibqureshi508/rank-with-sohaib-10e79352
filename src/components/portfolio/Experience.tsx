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
    <section id="experience" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">Professional Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My SEO Career Journey
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-100 hover:border-blue-500 transition-colors pb-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="mt-1 font-semibold text-gray-700">{exp.company} <span className="text-gray-400 font-normal">| {exp.type}</span></p>
              <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <span className="mr-2 text-blue-500">•</span>
                    {item}
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
