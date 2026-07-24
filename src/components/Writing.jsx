import { writing } from '../data/writing.js';
import useReveal from '../useReveal';
import './Writing.css';

export default function Writing() {
  const ref = useReveal();

  return (
    <section id="writing" className="section section-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="eyebrow">06 · writing</p>
          <h2 className="section-heading">Published</h2>

          <ul className="writing-list">
            {writing.map((post) => (
              <li key={post.href}>
                <a href={post.href} target="_blank" rel="noreferrer" className="writing-link">
                  <div>
                    <span className="writing-title">{post.title}</span>
                    <span className="writing-pub">{post.publication}</span>
                  </div>
                  <span className="writing-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
