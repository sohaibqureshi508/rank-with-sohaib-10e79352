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
    <section id="certifications" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">Certifications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Semrush Certified SEO Expert
          </p>
          <p className="mt-4 text-gray-600">
            Verified Semrush Academy certifications in keyword research, on-page SEO and AI search.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col rounded-3xl border border-gray-100 bg-[#fcfbf8] p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                {cert.issuer}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
              <p className="mt-2 text-sm text-gray-500">
                {cert.valid} · Certificate ID {cert.id}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                View certificate
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
