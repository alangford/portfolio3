import { useState } from 'react';
import { experience } from '../data/experience.js';
import useReveal from '../useReveal';
import './Experience.css';

function ServiceRow({ entry }) {
  const [open, setOpen] = useState(false);
  const hasDetail = entry.bullets.length > 0;

  return (
    <li className="service">
      <button
        className="service-row"
        onClick={() => hasDetail && setOpen((v) => !v)}
        aria-expanded={hasDetail ? open : undefined}
        disabled={!hasDetail}
      >
        <span className={`status-dot ${entry.status === 'paused' ? 'past' : entry.status}`} aria-hidden="true" />
        <span className="service-name">
          {entry.company}
          <span className="service-role">{entry.role}</span>
        </span>
        <span className="service-period">{entry.period}</span>
        <span className={`service-badge badge-${entry.status}`}>{entry.statusLabel}</span>
        {hasDetail && <span className={`service-caret ${open ? 'open' : ''}`}>⌄</span>}
      </button>

      {hasDetail && open && (
        <ul className="service-log">
          {entry.bullets.map((b, i) => (
            <li key={i}>
              <span className="log-tag">✓ resolved</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">02 · experience</p>
          <h2 className="section-heading">Service history</h2>
          <p className="experience-intro">
            8+ years of infrastructure work, read the way I'd read an incident
            timeline. Tap any row for the detail.
          </p>

          <ul className="service-list">
            {experience.map((entry) => (
              <ServiceRow key={entry.id} entry={entry} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
