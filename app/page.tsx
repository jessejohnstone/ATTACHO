import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Benefits from "@/components/home/benefits";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
              AttachReady Kenya
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Opportunities will become real as verified companies join the
              platform.
            </h2>

            <p className="mt-4 text-slate-600">
              Demo listings will be clearly identified during development and
              replaced with legitimately verified opportunities before launch.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}