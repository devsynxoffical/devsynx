"use client";

import { useMemo, useState } from "react";

/**
 * Hours-based cost estimator. Cost = estimated hours x typical hourly rate
 * ranges by region. The initial selection is rendered at build time, so the
 * page shows a real estimate in its static HTML before any interaction.
 */

export type CalcOption = { id: string; label: string; hours?: number; multiplier?: number };
export type CalcGroup = {
  id: string;
  label: string;
  kind: "single" | "multi";
  options: CalcOption[];
  defaultIds: string[];
};
export type CalcConfig = {
  groups: CalcGroup[];
  /** People working in parallel, used to turn hours into a calendar estimate. */
  teamSize: number;
  /** Hours each person delivers per week. */
  weeklyHours: number;
};

const REGIONS = [
  { id: "us", label: "US / Canada agency", min: 100, max: 160 },
  { id: "uk", label: "UK / Western Europe agency", min: 80, max: 130 },
  { id: "ee", label: "Eastern Europe / Latin America", min: 40, max: 75 },
  { id: "pk", label: "Pakistan / South Asia (e.g. DEVSYNX)", min: 25, max: 45 },
];

const fmt = (n: number) => `$${(Math.round(n / 500) * 500).toLocaleString("en-US")}`;

export function CostCalculator({ config, ariaLabel }: { config: CalcConfig; ariaLabel: string }) {
  const [sel, setSel] = useState<Record<string, string[]>>(() =>
    Object.fromEntries(config.groups.map((g) => [g.id, g.defaultIds]))
  );

  const result = useMemo(() => {
    let hours = 0;
    let multiplier = 1;
    for (const g of config.groups) {
      for (const o of g.options) {
        if (!sel[g.id]?.includes(o.id)) continue;
        if (o.hours) hours += o.hours;
        if (o.multiplier) multiplier *= o.multiplier;
      }
    }
    const total = hours * multiplier;
    const low = total * 0.85;
    const high = total * 1.2;
    const weeksLow = Math.max(1, Math.round(low / (config.teamSize * config.weeklyHours)));
    const weeksHigh = Math.max(weeksLow, Math.round(high / (config.teamSize * config.weeklyHours)));
    return { low, high, weeksLow, weeksHigh };
  }, [sel, config]);

  const toggle = (g: CalcGroup, id: string) =>
    setSel((prev) => {
      if (g.kind === "single") return { ...prev, [g.id]: [id] };
      const cur = prev[g.id] ?? [];
      return { ...prev, [g.id]: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id] };
    });

  return (
    <div className="calc" aria-label={ariaLabel}>
      <form className="calc__panel" onSubmit={(e) => e.preventDefault()}>
        {config.groups.map((g) => (
          <fieldset className="calc__group" key={g.id}>
            <legend>{g.label}</legend>
            <div className="calc__options">
              {g.options.map((o) => (
                <label className="calc__opt" key={o.id}>
                  <input
                    id={`${g.id}-${o.id}`}
                    type={g.kind === "single" ? "radio" : "checkbox"}
                    name={g.id}
                    checked={sel[g.id]?.includes(o.id) ?? false}
                    onChange={() => toggle(g, o.id)}
                  />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>

      <div className="calc__panel calc__result" aria-live="polite">
        <div>
          <div className="calc__label">Estimated effort</div>
          <div className="calc__big">
            {Math.round(result.low).toLocaleString("en-US")}–{Math.round(result.high).toLocaleString("en-US")} hours
          </div>
          <div className="calc__note">
            About {result.weeksLow}–{result.weeksHigh} weeks with a team of {config.teamSize}.
          </div>
        </div>
        <div>
          <div className="calc__label">Estimated cost by team location</div>
          <div className="calc__rows">
            {REGIONS.map((r) => (
              <div className="calc__row" key={r.id}>
                <span>{r.label}</span>
                <b>
                  {fmt(result.low * r.min)} – {fmt(result.high * r.max)}
                </b>
              </div>
            ))}
          </div>
        </div>
        <p className="calc__note">
          Ballpark estimate from typical hours for each feature and typical agency rates (US $100–160/h, UK/Western
          Europe $80–130/h, Eastern Europe/Latin America $40–75/h, South Asia $25–45/h). It is not a quote: real
          cost depends on your exact requirements, integrations and design.
        </p>
      </div>
    </div>
  );
}
