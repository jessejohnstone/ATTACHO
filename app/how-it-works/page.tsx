import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-600">AttachReady Kenya</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">How it works</h1>
        <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-slate-600">Find a placement that fits your course, review the requirements, and submit a reservation request.</p>
          <ol className="list-decimal space-y-4 pl-5 text-slate-700">
            <li>Search opportunities by course, location, industry, and availability.</li>
            <li>Open a listing to review its dates, slots, fee, and eligible courses.</li>
            <li>Reserve a suitable placement and wait for company confirmation.</li>
          </ol>
          <Link href="/opportunities" className="inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">Find opportunities</Link>
        </div>
      </section>
    </main>
  );
}