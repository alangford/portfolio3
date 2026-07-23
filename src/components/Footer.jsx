import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Andrew Langford</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
