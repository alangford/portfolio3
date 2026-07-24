import { projects } from '../data/projects.js';
import useReveal from '../useReveal';
import './Projects.css';

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">04 · earlier projects</p>
          <h2 className="section-heading">Older builds, still up</h2>
          <p className="projects-intro">
            A few things from earlier in my career, hosted under their own
            subdomains.
          </p>

          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noreferrer" className="project-link">
                  <span className="project-name">{p.name}</span>
                  <span className="project-url">{p.href.replace('https://', '')}</span>
                  <span className="project-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
