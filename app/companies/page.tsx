import Link from "next/link";

export default function CompaniesPage() {
  return <InfoPage title="For companies" description="Connect with students looking for industrial attachment placements and share your opportunity details." action="List an opportunity" href="mailto:hello@attachready.example" />;
}

function InfoPage({ title, description, action, href }: { title: string; description: string; action: string; href: string }) {
  return (
    <main className="min-h-screen bg-slate-50"><section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-wider text-green-600">AttachReady Kenya</p><h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{title}</h1><div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-slate-600">{description}</p><Link href={href} className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">{action}</Link></div></section></main>
  );
}