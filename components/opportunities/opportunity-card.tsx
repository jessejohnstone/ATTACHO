import type { Opportunity } from "@/lib/demo-opportunities";

export default function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
            {opportunity.industry}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {opportunity.title}
          </h3>
        </div>

        {opportunity.verified ? (
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
            Verified
          </span>
        ) : (
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
            Demo
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-slate-600">{opportunity.company}</p>

      <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div>
          <p className="text-slate-500">Location</p>
          <p className="font-medium">{opportunity.town}, {opportunity.county}</p>
        </div>

        <div>
          <p className="text-slate-500">Duration</p>
          <p className="font-medium">{opportunity.duration}</p>
        </div>

        <div>
          <p className="text-slate-500">Available slots</p>
          <p className="font-medium">{opportunity.availableSlots}</p>
        </div>

        <div>
          <p className="text-slate-500">Reservation fee</p>
          <p className="font-medium">KSh {opportunity.reservationFee.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-slate-500">Eligible courses</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {opportunity.eligibleCourses.map((course) => (
            <span
              key={`${opportunity.id}-${course}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-600">
        <span>{opportunity.paid ? "Paid placement" : "Unpaid placement"}</span>
        <span>{opportunity.accommodation ? "Accommodation available" : "No accommodation"}</span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500">
          Deadline: {new Date(opportunity.applicationDeadline).toLocaleDateString("en-KE", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          View details
        </button>
      </div>
    </article>
  );
}
