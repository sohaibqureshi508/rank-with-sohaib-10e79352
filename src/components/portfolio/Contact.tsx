export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rank With Sohaib — Let's Grow Your Organic Search
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Available for remote SEO roles, freelance SEO services, and SEO audit consultations.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
            <a href="mailto:sohaibqureshi4410@gmail.com" className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-200 underline-offset-8">
              sohaibqureshi4410@gmail.com
            </a>
            <a href="tel:+923008974410" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              +92 300 8974410
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://github.com/sohaibqureshi508"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sohaib-qureshi-seo-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">Located in</p>
            <p className="text-lg font-medium text-gray-900">Multan, Pakistan (GMT+5)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
