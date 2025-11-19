export default function CTA() {
  return (
    <section id="cta" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#F8E7EA]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2B0B10]">
            Start sending bouquets today
          </h2>
          <p className="mt-3 text-[#5B1E26]/80">
            Be among the first to try the app. We’ll notify you when it’s available.
          </p>

          <form className="mt-8 relative mx-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-rose-200 bg-white/90 px-5 py-3 pr-36 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="button"
              className="absolute right-1 top-1 bottom-1 rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600"
            >
              Notify me
            </button>
          </form>

          <p className="mt-4 text-xs text-rose-900/60">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
