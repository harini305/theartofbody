"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function PlanList({ plans }) {
  const dialogRef = useRef(null);
  const [plan, setPlan] = useState(null);

  const open = (p) => {
    setPlan(p);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <ul className="plans">
        {plans.map((p) => (
          <li key={p.name}>
            <article className="plan">
              <h3>{p.name}</h3>
              <p>{p.includes}</p>
              <p className="plan__price">{p.price}</p>
              <p>Valid for 3 months</p>
              <button type="button" className="btn btn--primary" onClick={() => open(p)} aria-haspopup="dialog">
                Buy now<span className="visually-hidden">: {p.name}</span>
              </button>
            </article>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="dialog" aria-labelledby="plan-dialog-title">
        <div className="dialog__inner">
          <h2 id="plan-dialog-title">{plan ? plan.name : "Plan"}</h2>
          <p>
            {plan?.price} · valid for 3 months. Online checkout isn&rsquo;t available on this preview site, so no payment
            has been taken.
          </p>
          <p>To buy this plan, contact the studio and we&rsquo;ll arrange it with you.</p>
          <div className="actions">
            {plan && (
              <Link
                prefetch={false}
                className="btn btn--primary"
                href={`/contact-us?subject=${encodeURIComponent(`Plan: ${plan.name}`)}`}
                onClick={() => dialogRef.current?.close()}
              >
                Contact the studio
              </Link>
            )}
            <button type="button" className="btn btn--secondary" onClick={() => dialogRef.current?.close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
