export default function Button({ children, href = '#', variant = 'primary' }) {
  const classes =
    variant === 'secondary'
      ? 'border border-white/30 bg-white/[0.03] text-white hover:border-ember-500 hover:text-ember-400'
      : 'bg-gradient-to-r from-ember-500 via-ember-400 to-ember-600 text-black shadow-glow hover:brightness-110';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${classes}`}
    >
      {children}
    </a>
  );
}
