import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            Industrial attachment opportunities in Kenya
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Secure your industrial attachment before opportunities fill up.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find verified attachment opportunities, compare placements, check
            availability, and reserve an opportunity that matches your course
            and preferred dates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/opportunities"
              className="rounded-lg bg-slate-900 px-6 py-3 text-center font-semibold text-white hover:bg-slate-700"
            >
              Find My Attachment
            </Link>

            <Link
              href="/how-it-works"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 hover:bg-slate-50"
            >
              How It Works
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Placement depends on company availability, student eligibility,
            submitted documents, and company confirmation.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Find an opportunity
          </h2>

          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Course or keyword"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
            />

            <select className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option value="">Select town</option>
              <option value="nairobi">Nairobi</option>
              <option value="naivasha">Naivasha</option>
              <option value="nakuru">Nakuru</option>
            </select>

            <select className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option value="">Select field</option>
              <option value="cs">Computer Science</option>
              <option value="it">Information Technology</option>
              <option value="se">Software Engineering</option>
              <option value="business">Business Administration</option>
              <option value="finance">Finance</option>
            </select>

            <Link
              href="/opportunities"
              className="block rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white hover:bg-green-700"
            >
              Search Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
