import useReveal from '../useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">01 · about</p>
          <h2 className="section-heading">From the terminal to the boardroom</h2>

          <div className="about-grid">
            <p>
              I've spent the last 8+ years on the infrastructure side of the house —
              first as a hands-on DevOps and SRE engineer building and hardening AWS
              environments at Upwell, Cricut, and Verisys, then as a technical advisor
              at AWS working directly with CTOs and VPs of Engineering to turn
              architecture risk and cost data into decisions leadership could act on.
            </p>
            <p>
              What ties those roles together is the same instinct: good infrastructure
              should be invisible. I care about self-service platforms that let
              engineering teams move independently, governance that catches problems
              before they're incidents, and cost discipline that doesn't get in
              anyone's way. I'm equally comfortable writing Terraform at 2am during an
              incident and presenting platform strategy to an executive team the next
              morning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
