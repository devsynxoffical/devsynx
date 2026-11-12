"use client";

import { useMemo, useState } from "react";

/**
 * DEVSYNX price estimator. Each option adds effort (hours) or scales it; the
 * effort is turned into a DEVSYNX fixed-price range (base + hours x rate,
 * capped at config.price.cap) and a timeline. The initial selection is
 * rendered at build time, so the page shows a real estimate in its static HTML.
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
  /** DEVSYNX pricing: USD = base + hours x perHour, never above cap. */
  price: { base: number; perHour: number; cap: number };
};

const PKR_PER_USD = 280;
const usd = (n: number) => {
  const step = n < 1000 ? 10 : 50;
  return `$${(Math.round(n / step) * step).toLocaleString("en-US")}`;
};
const pkr = (n: number) => `PKR ${(Math.round((n * PKR_PER_USD) / 5000) * 5000).toLocaleString("en-US")}`;

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
    const { base, perHour, cap } = config.price;
    const mid = Math.min(cap, base + total * perHour);
    const priceHigh = Math.min(cap, mid * 1.15);
    const priceLow = Math.min(mid * 0.85, priceHigh * 0.8);
    // (low is always at least 20% below high, so the range never collapses)
    return { weeksLow, weeksHigh, priceLow, priceHigh };
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
          <div className="calc__label">DEVSYNX fixed-price estimate</div>
          <div className="calc__big">
            {usd(result.priceLow)} – {usd(result.priceHigh)}
          </div>
          <div className="calc__note">
            About {pkr(result.priceLow)} – {pkr(result.priceHigh)}
          </div>
        </div>
        <div>
          <div className="calc__label">Estimated timeline</div>
          <div className="calc__big">
            {result.weeksLow}–{result.weeksHigh} weeks
          </div>
          <div className="calc__note">With a team of {config.teamSize}, plus your feedback rounds.</div>
        </div>
        <p className="calc__note">
          Estimate for a project built by DEVSYNX, before a scoping call. You get a written fixed price after a free
          call, paid in milestones, and you own the full source code. Most projects cost under{" "}
          {usd(config.price.cap)}.
        </p>
        <a
          className="calc__cta"
          href="https://wa.me/923029462542?text=Hi%20DEVSYNX%2C%20I%20used%20your%20cost%20calculator%20and%20want%20a%20fixed%20quote."
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a price for my budget on WhatsApp →
        </a>
      </div>
    </div>
  );
}
