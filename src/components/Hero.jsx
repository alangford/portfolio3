import portrait from '../assets/portrait.jpg';
import useReveal from '../useReveal';
import './Hero.css';

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div ref={ref} className="hero-copy reveal">
          <p className="eyebrow">// infrastructure &amp; platform engineering</p>
          <h1 className="hero-title">Andrew Langford</h1>
          <p className="hero-tagline">
            I build the AWS foundations that let engineering teams ship on their own —
            secure, self-service, and cheaper to run than what they replaced.
          </p>
          <p className="hero-summary">
            8+ years operating and modernizing large-scale AWS environments, spanning
            hands-on platform engineering, DevOps leadership, and enterprise technical
            advisory. Comfortable as a player-coach: writing Terraform and debugging
            incidents one day, briefing executives on platform strategy the next.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              View experience
            </a>
            <a className="btn" href="/resume.pdf" download>
              Download resume ↓
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>8+</dt>
              <dd>years in AWS infrastructure</dd>
            </div>
            <div>
              <dt>6</dt>
              <dd>AWS certifications</dd>
            </div>
            <div>
              <dt>2×</dt>
              <dd>Professional-level certified</dd>
            </div>
          </dl>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait-card">
            <img src={portrait} alt="Portrait of Andrew Langford" className="hero-portrait" />
            <div className="hero-portrait-tag">
              <span className="status-dot operational" aria-hidden="true" />
              <span>Lehi, UT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
