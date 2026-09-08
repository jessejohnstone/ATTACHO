import Link from "next/link";
import { notFound } from "next/navigation";

import { opportunities } from "@/lib/demo-opportunities";

export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/opportunities" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Back to opportunities
        </Link>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">{opportunity.industry}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{opportunity.title}</h1>
          <p className="mt-3 text-slate-600">{opportunity.company}</p>

          <div className="mt-8 grid gap-5 text-sm text-slate-700 sm:grid-cols-2">
            <p><span className="text-slate-500">Location:</span> {opportunity.town}, {opportunity.county}</p>
            <p><span className="text-slate-500">Duration:</span> {opportunity.duration}</p>
            <p><span className="text-slate-500">Available slots:</span> {opportunity.availableSlots}</p>
            <p><span className="text-slate-500">Reservation fee:</span> KSh {opportunity.reservationFee.toLocaleString()}</p>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500">Eligible courses</p>
            <p className="mt-2 text-slate-700">{opportunity.eligibleCourses.join(", ")}</p>
          </div>

          <Link href={`/opportunities/${opportunity.id}/reserve`} className="mt-8 inline-flex rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
            Reserve placement
          </Link>
        </div>
      </section>
    </main>
  );
}