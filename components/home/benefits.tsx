const benefits = [
  {
    title: "Discover early",
    description:
      "Find opportunities before your preferred reporting period gets crowded.",
  },
  {
    title: "Compare placements",
    description:
      "Review locations, duration, eligibility, availability, and other important details.",
  },
  {
    title: "Track your progress",
    description:
      "Keep your applications, reservations, payments, and documents organized in one place.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Why AttachReady
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Make attachment hunting more organized.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
