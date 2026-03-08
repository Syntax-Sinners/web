import SectionHeading from './SectionHeading';

const categories = [
  {
    title: 'SaaS Platforms',
    desc: 'Multi-tenant software systems designed for real businesses.',
  },
  {
    title: 'Operational Dashboards',
    desc: 'Admin panels and data platforms for managing business operations.',
  },
  {
    title: 'Backend Infrastructure',
    desc: 'APIs, authentication systems, monitoring tools, and scalable services.',
  },
  {
    title: 'Business Tools',
    desc: 'Custom software used daily by companies to run operations.',
  },
];

export default function BuildCategories() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading title="Production software, not demo projects." />
      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((item) => (
          <article key={item.title} className="glass-card p-6 md:p-8">
            <h3 className="mb-3 text-xl font-medium text-white">{item.title}</h3>
            <p className="text-white/70">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
