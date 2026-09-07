"use client";

type OpportunityFiltersProps = {
  search: string;
  town: string;
  course: string;
  industry: string;
  paid: string;
  accommodation: string;
  verified: string;
  sort: string;
  onChange: (name: string, value: string) => void;
};

export default function OpportunityFilters({
  search,
  town,
  course,
  industry,
  paid,
  accommodation,
  verified,
  sort,
  onChange,
}: OpportunityFiltersProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Search
          </label>

          <input
            id="search"
            value={search}
            onChange={(e) => onChange("search", e.target.value)}
            placeholder="Course, company, opportunity..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
          />
        </div>

        <SelectField
          label="Town"
          value={town}
          onChange={(value) => onChange("town", value)}
          options={["Nairobi", "Naivasha", "Nakuru"]}
        />

        <SelectField
          label="Course"
          value={course}
          onChange={(value) => onChange("course", value)}
          options={[
            "Computer Science",
            "Information Technology",
            "Software Engineering",
            "Business Administration",
            "Finance",
            "Accounting",
            "Marketing",
            "Human Resource Management",
            "Hospitality",
            "Agriculture",
            "Environmental Science",
            "Engineering",
            "Supply Chain and Logistics",
          ]}
        />

        <SelectField
          label="Industry"
          value={industry}
          onChange={(value) => onChange("industry", value)}
          options={[
            "Technology",
            "Agriculture",
            "Hospitality",
            "Finance",
            "Business",
            "Logistics",
            "Environment",
            "Marketing",
            "Engineering",
          ]}
        />

        <SelectField
          label="Payment"
          value={paid}
          onChange={(value) => onChange("paid", value)}
          options={["Paid", "Unpaid"]}
        />

        <SelectField
          label="Accommodation"
          value={accommodation}
          onChange={(value) => onChange("accommodation", value)}
          options={["Available", "Unavailable"]}
        />

        <SelectField
          label="Verification"
          value={verified}
          onChange={(value) => onChange("verified", value)}
          options={["Verified only"]}
        />

        <SelectField
          label="Sort by"
          value={sort}
          onChange={(value) => onChange("sort", value)}
          options={["Newest", "Lowest fee", "Most slots", "Deadline"]}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
      >
        <option value="">All</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
