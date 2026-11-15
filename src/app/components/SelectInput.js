// SelectInput.jsx
import { useId } from "react";

export default function SelectInput({
  label,
  options = [],
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm lg:text-base font-medium uppercase tracking-wider text-zinc-400">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full appearance-none rounded-md border-none bg-gray-100 px-4 py-3 pr-10 text-sm outline-none focus:outline-none focus:ring-0 focus:bg-gray-200 ${
            value === "" ? "text-black/50" : "text-black"
          } ${className}`}
          {...props}
        >
          <option value="" disabled={true} className="bg-[#0f1324]">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0f1324]">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom arrow (appearance-none removes the default one) */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </div>
    </div>
  );
}