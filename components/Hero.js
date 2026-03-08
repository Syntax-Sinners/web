import Button from './Button';

export default function Hero() {
  return (
    <section className="section-shell pt-20 md:pt-24">
      <div className="glass-card relative overflow-hidden p-8 md:p-14">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-ember-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-ember-400/20 blur-3xl" />
        <div className="relative max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.22em] text-white/70">Developers building real software systems.</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
            Developers building real systems for real businesses.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            Syntax Sinners is an independent engineering collective that designs and ships production software including SaaS
            platforms, admin dashboards, business tools, and scalable backend systems.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#systems">View Systems</Button>
            <Button href="#team" variant="secondary">
              Meet The Team
            </Button>
          </div>
          <p className="text-sm text-white/55">Software currently used by businesses, clinics, and service companies.</p>
        </div>
      </div>
    </section>
  );
}
