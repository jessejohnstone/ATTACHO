import Link from "next/link";

export default async function ReservePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href={`/opportunities/${id}`} className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Back to opportunity
        </Link>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">AttachReady Kenya</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Reserve Placement</h1>
          <p className="mt-3 text-slate-600">Submit your reservation request for this attachment opportunity.</p>

          <div className="mt-8 rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Opportunity ID</p>
            <p className="mt-1 font-semibold text-slate-900">{id}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">Before you continue</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>✓ You must have a student account.</p>
              <p>✓ Your student profile must be sufficiently complete.</p>
              <p>✓ Your course and attachment dates must match the opportunity.</p>
              <p>✓ The company must confirm your reservation request.</p>
              <p>✓ Payment may be required after company acceptance.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-amber-900"><strong>Important:</strong> Submitting a reservation request does not guarantee placement. Confirmation depends on company availability, your eligibility, submitted information, and company approval.</p>
          </div>

          <Link href="/login" className="mt-8 block w-full rounded-lg bg-slate-900 px-5 py-3 text-center font-semibold text-white hover:bg-slate-700">
            Continue to login
          </Link>
        </div>
      </section>
    </main>
  );
}