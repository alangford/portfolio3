import { competencies } from '../data/competencies.js';
import useReveal from '../useReveal';
import './Competencies.css';

export default function Competencies() {
  const ref = useReveal();

  return (
    <section id="competencies" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">03 · competencies</p>
          <h2 className="section-heading">What I operate</h2>

          <div className="comp-grid">
            {competencies.map((group) => (
              <div className="comp-card" key={group.category}>
                <h3 className="comp-category">{group.category}</h3>
                <div className="comp-tags">
                  {group.items.map((item) => (
                    <span className="comp-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
