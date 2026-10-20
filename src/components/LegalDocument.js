import { legal } from "@/content/legal";

// Renders the verbatim legal text from the original site as normal, responsive HTML.
export default function LegalDocument({ doc }) {
  const d = legal[doc];
  return (
    <article className="legal">
      <div className="container container--narrow">
        <header className="simple-hero" style={{ paddingInline: 0 }}>
          <h1 data-hero-item>{d.title}</h1>
          <p className="legal__meta">Last updated: {d.updated}</p>
        </header>
        <div className="legal__body">
          {d.blocks.map((b, i) => {
            if (b.t === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.t === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.t === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            if (b.t === "table")
              return (
                <table key={i}>
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r[0]}>
                        {r.map((c) => (
                          <td key={c}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            return <p key={i}>{b.strong ? <strong>{b.text}</strong> : b.text}</p>;
          })}
        </div>
        {d.footer && <p className="legal__footer">{d.footer}</p>}
      </div>
    </article>
  );
}
