export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-white/70 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
