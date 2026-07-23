import { certifications } from '../data/certifications.js';
import useReveal from '../useReveal';
import './Certifications.css';

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">04 · certifications</p>
          <h2 className="section-heading">Credentials on file</h2>

          <ul className="cert-list">
            {certifications.map((cert) => (
              <li className="cert-item" key={cert.name}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-date">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
