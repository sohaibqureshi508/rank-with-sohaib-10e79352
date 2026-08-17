export function DeploymentGuide() {
  return (
    <section id="guide" className="bg-gray-900 text-white py-24 sm:py-32 rounded-[3rem] mx-4 sm:mx-8 my-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-400 uppercase tracking-wide">Next Steps</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How to Make This Portfolio Yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm">1</span>
              Using Lovable Code
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>You are currently using <strong>Lovable</strong>, an AI agent that generates code based on your requests.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>To make changes, just type what you want in the chat (e.g., "Change the background color to dark mode" or "Add a new project").</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span>The preview on the right will update in real-time as the code is modified.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm">2</span>
              GitHub & Hosting
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Connect GitHub:</strong> Click the "Publish" button in the top right corner of the Lovable interface.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Push Code:</strong> Select "Export to GitHub" to create a repository with all this code.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Live Site:</strong> Once on GitHub, you can connect your repository to services like Netlify, Vercel, or GitHub Pages to make your portfolio live.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
