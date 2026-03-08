const links = [
  { label: 'Team', href: '#team' },
  { label: 'Systems', href: '#systems' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-5 z-20 px-6 md:px-10">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-black/65 px-6 py-4 backdrop-blur-xl">
        <a href="#" className="text-sm font-semibold tracking-wide text-white md:text-base">
          <span className="text-ember-500">{'</>'}</span> Syntax Sinners
        </a>
        <ul className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-ember-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
