"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import OpportunityCard from "@/components/opportunities/opportunity-card";
import OpportunityFilters from "@/components/opportunities/opportunity-filters";
import { opportunities } from "@/lib/demo-opportunities";

export default function OpportunitiesPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50 p-8 text-slate-700">
          Loading opportunities...
        </main>
      }
    >
      <OpportunitiesPageContent />
    </Suspense>
  );
}

function OpportunitiesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState({
    search: searchParams.get("search") ?? "",
    town: searchParams.get("town") ?? "",
    course: searchParams.get("course") ?? "",
    industry: searchParams.get("industry") ?? "",
    paid: searchParams.get("paid") ?? "",
    accommodation: searchParams.get("accommodation") ?? "",
    verified: searchParams.get("verified") ?? "",
    sort: searchParams.get("sort") ?? "Newest",
  });

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    router.replace(`/opportunities?${params.toString()}`, {
      scroll: false,
    });
  }, [filters, router]);

  const filteredOpportunities = useMemo(() => {
    const result = opportunities.filter((opportunity) => {
      const searchableText = [
        opportunity.title,
        opportunity.company,
        opportunity.industry,
        opportunity.town,
        opportunity.county,
        ...opportunity.eligibleCourses,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !filters.search ||
        searchableText.includes(filters.search.toLowerCase());

      const matchesTown =
        !filters.town || opportunity.town === filters.town;

      const matchesCourse =
        !filters.course ||
        opportunity.eligibleCourses.includes(filters.course) ||
        opportunity.eligibleCourses.some((course) =>
          course.toLowerCase().includes(filters.course.toLowerCase()),
        );

      const matchesIndustry =
        !filters.industry || opportunity.industry === filters.industry;

      const matchesPaid =
        !filters.paid ||
        (filters.paid === "Paid" && opportunity.paid) ||
        (filters.paid === "Unpaid" && !opportunity.paid);

      const matchesAccommodation =
        !filters.accommodation ||
        (filters.accommodation === "Available" &&
          opportunity.accommodation) ||
        (filters.accommodation === "Unavailable" &&
          !opportunity.accommodation);

      const matchesVerified =
        !filters.verified || opportunity.verified;

      return (
        matchesSearch &&
        matchesTown &&
        matchesCourse &&
        matchesIndustry &&
        matchesPaid &&
        matchesAccommodation &&
        matchesVerified
      );
    });

    return result.sort((a, b) => {
      switch (filters.sort) {
        case "Lowest fee":
          return a.reservationFee - b.reservationFee;

        case "Most slots":
          return b.availableSlots - a.availableSlots;

        case "Deadline":
          return (
            new Date(a.applicationDeadline).getTime() -
            new Date(b.applicationDeadline).getTime()
          );

        default:
          return (
            new Date(b.startDate).getTime() -
            new Date(a.startDate).getTime()
          );
      }
    });
  }, [filters]);

  function updateFilter(name: string, value: string) {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearFilters() {
    setFilters({
      search: "",
      town: "",
      course: "",
      industry: "",
      paid: "",
      accommodation: "",
      verified: "",
      sort: "Newest",
    });
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            AttachReady Kenya
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find industrial attachment opportunities
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Compare opportunities by course, location, availability,
            accommodation, and other important details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <OpportunityFilters
          {...filters}
          onChange={updateFilter}
        />

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900">
              {filteredOpportunities.length} opportunities found
            </p>

            <p className="text-sm text-slate-500">
              Demo opportunities are clearly marked until verified companies are
              onboarded.
            </p>
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Clear filters
          </button>
        </div>

        {filteredOpportunities.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-slate-900">
              No opportunities found
            </h2>

            <p className="mt-2 text-slate-600">
              Try changing your search or removing some filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Reset search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
