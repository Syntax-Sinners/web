import Button from './Button';

export default function CTA() {
  return (
    <section id="contact" className="section-shell pt-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ember-500 via-ember-400 to-ember-600 p-10 text-black md:p-14">
        <div className="absolute -right-12 -top-8 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
        <div className="relative space-y-5">
          <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">Need engineers who actually ship?</h2>
          <p className="max-w-3xl text-sm md:text-base">
            From SaaS platforms to business dashboards, we design and build production software systems used by real companies.
          </p>
          <Button href="mailto:hello@syntaxsinners.dev" variant="secondary">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
