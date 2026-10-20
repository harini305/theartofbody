"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/blocks";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// "Today" in Bali (WITA, UTC+8), independent of the visitor's time zone.
function baliToday() {
  const now = new Date(Date.now() + 8 * 3600 * 1000);
  return { y: now.getUTCFullYear(), m: now.getUTCMonth(), d: now.getUTCDate() };
}

function buildWeeks(y, m) {
  const first = new Date(Date.UTC(y, m, 1)).getUTCDay();
  const count = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  const cells = Array(first).fill(null).concat(Array.from({ length: count }, (_, i) => i + 1));
  while (cells.length % 7) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

/*
  Frontend-only date picker. It deliberately shows no time slots: real availability
  lives in the studio's booking system, which this site is not connected to.
  Choosing a date prepares an enquiry on the contact page instead.
*/
export default function BookingCalendar({ serviceName }) {
  // Computed after mount: static HTML is generated at build time and must not bake in a date.
  const [today, setToday] = useState(null);
  useEffect(() => {
    const t = baliToday();
    setToday(t);
    setView({ y: t.y, m: t.m });
  }, []);
  const [view, setView] = useState(null);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState("No preference");

  if (!today || !view) {
    return (
      <div className="calendar" aria-busy="true">
        <p className="calendar__tz">Loading calendar…</p>
      </div>
    );
  }

  const weeks = buildWeeks(view.y, view.m);
  const isPast = (d) =>
    view.y < today.y || (view.y === today.y && (view.m < today.m || (view.m === today.m && d < today.d)));
  const atStart = view.y === today.y && view.m === today.m;
  const shift = (n) => {
    const date = new Date(Date.UTC(view.y, view.m + n, 1));
    setView({ y: date.getUTCFullYear(), m: date.getUTCMonth() });
  };

  const selectedLabel = selected
    ? `${DAY_NAMES[new Date(Date.UTC(selected.y, selected.m, selected.d)).getUTCDay()]}, ${selected.d} ${MONTHS[selected.m]} ${selected.y}`
    : null;
  const enquiryHref = selected
    ? `/contact-us?subject=${encodeURIComponent(`Booking request: ${serviceName}`)}&message=${encodeURIComponent(
        `I'd like to request ${serviceName} on ${selectedLabel} (preferred time: ${time.toLowerCase()}).`
      )}`
    : null;

  return (
    <div className="calendar">
      <div className="calendar__head">
        <h2 id="cal-title" aria-live="polite">
          {MONTHS[view.m]} {view.y}
        </h2>
        <div className="calendar__nav">
          <button type="button" onClick={() => shift(-1)} disabled={atStart} aria-label="Previous month">
            <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden="true">
              <path d="M7 1L2 6l5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button type="button" onClick={() => shift(1)} aria-label="Next month">
            <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden="true">
              <path d="M1 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
      <p className="calendar__tz">Time zone: Central Indonesia Time (WITA, UTC+8)</p>

      <table className="calendar__grid" aria-labelledby="cal-title">
        <thead>
          <tr>
            {DAYS.map((d, i) => (
              <th key={d} scope="col">
                <abbr title={DAY_NAMES[i]} style={{ textDecoration: "none" }}>
                  {d}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((d, di) => {
                if (!d) return <td key={di} />;
                const isSel = selected && selected.y === view.y && selected.m === view.m && selected.d === d;
                const isToday = atStart && d === today.d;
                return (
                  <td key={di}>
                    <button
                      type="button"
                      className={`calendar__day${isToday ? " is-today" : ""}`}
                      disabled={isPast(d)}
                      aria-pressed={isSel ? "true" : "false"}
                      aria-label={`${d} ${MONTHS[view.m]}${isToday ? ", today" : ""}`}
                      onClick={() => setSelected({ y: view.y, m: view.m, d })}
                    >
                      {d}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="calendar__result" aria-live="polite">
        {selected ? (
          <>
            <h3>{selectedLabel}</h3>
            <p>
              Live availability isn&rsquo;t shown on this preview site. Send this date as a booking request and the studio
              will reply with the times they can offer.
            </p>
            <div className="field" style={{ marginTop: "1rem", maxWidth: "18rem" }}>
              <label htmlFor="pref-time">Preferred time of day</label>
              <select id="pref-time" value={time} onChange={(e) => setTime(e.target.value)}>
                <option>No preference</option>
                <option>Morning</option>
                <option>Afternoon</option>
              </select>
            </div>
            <div className="actions" style={{ marginTop: "1.25rem" }}>
              <Button href={enquiryHref}>Continue to booking request</Button>
            </div>
          </>
        ) : (
          <p>Select a date to start a booking request.</p>
        )}
      </div>
    </div>
  );
}
