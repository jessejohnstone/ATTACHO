import Link from "next/link";

export default function RegisterPage() {
  return <main className="min-h-screen bg-slate-50"><section className="mx-auto max-w-md px-4 py-16"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h1 className="text-2xl font-bold text-slate-900">Get started</h1><p className="mt-3 text-slate-600">Student registration will be available when authentication is connected.</p><Link href="/opportunities" className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">Browse opportunities</Link></div></section></main>;
}