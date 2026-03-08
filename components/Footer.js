const links = ['Team', 'Projects', 'Systems', 'Contact'];

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16">
      <div className="glass-card flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">Syntax Sinners</p>
          <p className="mt-2 text-sm text-white/60">Developers building real software systems.</p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <ul className="flex gap-5 text-sm text-white/75">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition hover:text-ember-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <form className="flex w-full max-w-sm items-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter" className="sr-only">
              Newsletter email
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Join the newsletter"
              className="w-full rounded-full border border-white/20 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-ember-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-4 py-2.5 text-sm font-medium text-black"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
