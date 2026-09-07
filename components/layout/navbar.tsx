import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-slate-900">Attach</span>
          <span className="text-green-600">Ready</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/opportunities"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Find Attachments
          </Link>

          <Link
            href="/how-it-works"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            How It Works
          </Link>

          <Link
            href="/companies"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            For Companies
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
