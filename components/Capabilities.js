import SectionHeading from './SectionHeading';

const capabilities = [
  'Multi-tenant SaaS architecture',
  'Role-based access systems',
  'Real-time monitoring dashboards',
  'QR based transaction systems',
  'API design and integrations',
  'Operational analytics systems',
  'Mobile + backend ecosystems',
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-shell">
      <SectionHeading title="Engineering Capabilities" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <div key={capability} className="glass-card flex items-center gap-3 p-5">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-ember-400 to-ember-600" />
            <p className="text-sm text-white/85">{capability}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
