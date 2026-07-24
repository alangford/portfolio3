import useReveal from '../useReveal';
import './Contact.css';

const LINES = [
  { label: 'email', value: 'a.b.l.2142@gmail.com', href: 'mailto:a.b.l.2142@gmail.com' },
  { label: 'phone', value: '801-694-7838', href: 'tel:+18016947838' },
  { label: 'github', value: 'github.com/alangford', href: 'https://github.com/alangford' },
  { label: 'linkedin', value: 'linkedin.com/in/andrewbl', href: 'https://www.linkedin.com/in/andrewbl/' },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">07 · contact</p>
          <h2 className="section-heading">Let's talk infrastructure</h2>
          <p className="contact-intro">
            Reach out directly, or grab the full write-up below.
          </p>

          <div className="console">
            <div className="console-bar">
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-title">contact.sh</span>
            </div>
            <div className="console-body">
              {LINES.map((line) => (
                <a key={line.label} className="console-line" href={line.href} target={line.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span className="console-prompt">$</span>
                  <span className="console-label">{line.label}</span>
                  <span className="console-value">{line.value}</span>
                </a>
              ))}
              <a className="console-line console-line-resume" href="/resume.pdf" download>
                <span className="console-prompt">$</span>
                <span className="console-label">resume</span>
                <span className="console-value">download resume.pdf ↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
