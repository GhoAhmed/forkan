function WelcomePage() {
  return (
    <div className="lattice-bg min-h-screen text-parchment">
      <Header />
      <Hero />
      <Pillars />
      <StudioTeaser />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-3">
        <Mark />
        <span className="font-display text-xl tracking-wide text-parchment">
          Waraq
        </span>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#pillars"
          className="text-sm text-parchment-dim transition-colors hover:text-gold"
        >
          Explore
        </a>
        <a
          href="#studio"
          className="text-sm text-parchment-dim transition-colors hover:text-gold"
        >
          Quran Studio
        </a>
        <a
          href="#"
          className="text-sm text-parchment-dim transition-colors hover:text-gold"
        >
          Sign in
        </a>
      </nav>
      <a href="#" className="btn-outline !px-5 !py-2 text-sm md:hidden">
        Sign in
      </a>
    </header>
  );
}

function Mark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 1L26.5 7.5V20.5L14 27L1.5 20.5V7.5Z"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.8"
      />
      <path
        d="M14 7L20 10.5V17.5L14 21L8 17.5V10.5Z"
        stroke="#D4AF37"
        strokeWidth="1"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pt-16 pb-24 text-center md:pt-24">
      <p className="eyebrow mb-8">A space for the Qur'an</p>

      <p
        dir="rtl"
        className="font-arabic text-balance text-4xl leading-relaxed text-gold sm:text-5xl md:text-6xl"
      >
        بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
      </p>

      <h1 className="font-display text-balance mt-8 max-w-2xl text-3xl font-medium leading-snug text-parchment sm:text-4xl md:text-5xl">
        Read, reflect, and create — one ayah at a time
      </h1>

      <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-parchment-dim">
        Waraq brings the Qur'an, its tafsir, and daily adhkar into a single
        quiet place — then helps you turn any ayah into something worth sharing.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a href="#" className="btn-gold">
          Start reading
        </a>
        <a href="#studio" className="btn-outline">
          See Quran Studio
        </a>
      </div>

      <div className="ornament-divider mt-20 w-full max-w-xs">
        <span className="diamond" />
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "Read",
    arabic: "القرآن",
    description:
      "Browse every surah with clean Uthmanic typography, line-by-line translation, and a reader built for long, quiet sessions.",
  },
  {
    title: "Understand",
    arabic: "التفسير",
    description:
      "Open any ayah into its tafsir — Ibn Kathir, Al-Jalalayn, and more — without losing your place in the page.",
  },
  {
    title: "Remember",
    arabic: "الأذكار",
    description:
      "Morning and evening adhkar with a gentle counter, so the same words find you at the same time each day.",
  },
];

function Pillars() {
  return (
    <section id="pillars" className="relative px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">The foundation</p>
          <h2 className="font-display text-2xl text-parchment md:text-3xl">
            Three habits, one home
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="illuminated-frame p-8">
              <p dir="rtl" className="font-arabic mb-6 text-2xl text-gold-dim">
                {pillar.arabic}
              </p>
              <h3 className="font-display mb-3 text-xl text-parchment">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-parchment-dim">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioTeaser() {
  return (
    <section id="studio" className="relative px-6 py-20 md:px-12">
      <div className="illuminated-frame mx-auto max-w-5xl p-10 md:p-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Coming in Quran Studio</p>
            <h2 className="font-display mb-5 text-2xl leading-snug text-parchment md:text-3xl">
              Turn an ayah into a film in minutes
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-parchment-dim">
              Choose a passage, pick a reciter, set the mood — Waraq renders the
              verse, the recitation, and a fitting backdrop into a video you can
              share, without ever opening an editor.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Surah & Ayah", "Reciter", "Style", "Background", "Render"].map(
                (step, i) => (
                  <span
                    key={step}
                    className="border border-line px-3 py-1.5 text-xs text-parchment-dim"
                  >
                    {i + 1}. {step}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative aspect-[9/16] max-w-[220px] justify-self-center border border-line bg-canvas-sunken">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
              <p
                dir="rtl"
                className="font-arabic text-center text-lg text-gold"
              >
                وَأَنَّ هٰذَا صِرَاطِي مُسْتَقِيمًا
              </p>
              <span className="ornament-divider w-2/3">
                <span className="diamond" />
              </span>
              <p className="text-center text-[11px] text-parchment-dim">
                Surah Al-An'am · Mishary Alafasy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-line-soft px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-lg text-parchment">Waraq</span>
        </div>
        <p className="text-xs text-sage">
          Built with care, for quiet reading — not for the algorithm.
        </p>
      </div>
    </footer>
  );
}

export default WelcomePage;
