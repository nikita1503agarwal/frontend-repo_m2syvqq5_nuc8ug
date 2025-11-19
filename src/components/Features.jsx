export default function Features() {
  const items = [
    {
      title: 'Hand‑crafted animations',
      desc: 'Bouquets sway and glow with gentle motion to match your mood.',
    },
    {
      title: 'Personal notes',
      desc: 'Attach heartfelt messages that open with each bouquet.',
    },
    {
      title: 'Share anywhere',
      desc: 'Send links or export short clips for socials and chat apps.',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-rose-900">Made for modern love</h2>
          <p className="mt-3 text-rose-800/80">Simple, aesthetic, and designed to feel special.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6">
              <div className="h-10 w-10 rounded-xl bg-rose-500/10 ring-1 ring-rose-400/20 grid place-items-center">
                <span className="text-rose-400">✿</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-rose-900">{f.title}</h3>
              <p className="mt-2 text-sm text-rose-800/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
