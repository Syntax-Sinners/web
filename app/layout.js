import './globals.css';

export const metadata = {
  title: 'Syntax Sinners — Developers building real software systems',
  description:
    'Independent engineering collective shipping SaaS platforms, backend systems, dashboards, and operational software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
