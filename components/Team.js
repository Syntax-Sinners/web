import SectionHeading from './SectionHeading';

const members = [
  { name: 'Sumit Srivastava', role: 'Lead Developer', href: '/dev/sumit-srivastava' },
  { name: 'Shiv Kaushal', role: 'Frontend Specialist', href: '/dev/shiv-kaushal' },
  { name: 'Aditya Singh', role: 'Full Stack Engineer', href: '/dev/aditya-singh' },
  { name: 'Avinash Kumar', role: 'UI / UX Engineer', href: '/dev/avinash-kumar' },
];

export default function Team() {
  return (
    <section id="team" className="section-shell">
      <SectionHeading title="The Engineers Behind Syntax Sinners" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <a key={member.name} href={member.href} className="glass-card block p-6 transition hover:border-ember-500/70">
            <p className="text-lg font-medium text-white">{member.name}</p>
            <p className="mt-2 text-sm text-white/65">{member.role}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-400">Open profile</p>
          </a>
        ))}
      </div>
    </section>
  );
}
