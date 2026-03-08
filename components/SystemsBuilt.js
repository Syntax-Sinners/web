import SectionHeading from './SectionHeading';

const systems = [
  {
    name: 'InnerCircle',
    description:
      'Cafe loyalty ecosystem deployed across multiple cafes. Users earn and redeem points through QR scanning and mobile apps.',
    stats: ['1300+ users', 'used across ~15 cafes', 'mobile + backend system'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'QR Services'],
    contributors: ['Sumit', 'Shiv', 'Aditya'],
  },
  {
    name: 'HisabKitab',
    description: 'Digital ledger platform used by insurance agents and small businesses.',
    stats: ['100+ insurance agents', '3000+ active users', 'real-world financial tracking'],
    technologies: ['Next.js', 'Express', 'MySQL', 'Charting'],
    contributors: ['Aditya', 'Avinash'],
  },
  {
    name: 'PhysioEZ',
    description: 'Clinic management SaaS platform for patient records and operations.',
    stats: ['appointment systems', 'analytics dashboards', 'clinic workflows'],
    technologies: ['Next.js', 'Prisma', 'RBAC', 'Cloud Storage'],
    contributors: ['Sumit', 'Avinash'],
  },
  {
    name: 'Developer Console',
    description: 'Real-time monitoring console for system logs, traffic events, and diagnostics.',
    stats: ['live traffic monitoring', 'error logs', 'system analytics'],
    technologies: ['WebSockets', 'Go APIs', 'Redis', 'Telemetry'],
    contributors: ['Shiv', 'Aditya', 'Sumit'],
  },
];

export default function SystemsBuilt() {
  return (
    <section id="systems" className="section-shell">
      <SectionHeading
        title="Real Systems Built"
        subtitle="Software with active users, operational workloads, and measurable outcomes."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {systems.map((system) => (
          <article key={system.name} className="glass-card p-7">
            <h3 className="text-2xl font-semibold text-gradient">{system.name}</h3>
            <p className="mt-3 text-white/75">{system.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {system.stats.map((stat) => (
                <li key={stat}>• {stat}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
              <p>
                <span className="font-semibold text-white">Technologies:</span>{' '}
                <span className="text-white/70">{system.technologies.join(' · ')}</span>
              </p>
              <p>
                <span className="font-semibold text-white">Contributors:</span>{' '}
                <span className="text-white/70">{system.contributors.join(', ')}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
