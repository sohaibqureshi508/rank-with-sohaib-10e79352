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
    <section id="local-seo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">Local SEO</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Google Business Profile &amp; Google Maps SEO
          </p>
          <p className="mt-4 text-gray-600">
            Local SEO for Pakistan SEO services — a fully optimised GMB profile and Google Maps presence built to win the local map pack.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {work.map((item) => (
            <div key={item.title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
