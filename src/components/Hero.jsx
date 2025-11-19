import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      {/* Background tone */}
      <div className="absolute inset-0 bg-[#F8E7EA]" />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.25)_0%,transparent_55%)]" />

      {/* Spline scene */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[78vh] w-full">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2B0B10]">
              Send love as a digital bouquet
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5B1E26]/80">
              A serene, minimalist way to express feelings with animated, shareable flower bouquets.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-3 text-white shadow-sm hover:bg-rose-600 transition">
                Get the app
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-[#2B0B10] px-5 py-3 text-white/90 hover:text-white">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
