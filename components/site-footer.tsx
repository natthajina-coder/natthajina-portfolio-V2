export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-connect">
          <h2>Let&apos;s Connect.</h2>
          <p>I&apos;m always open to meaningful conversations and opportunities where I can contribute and learn.</p>
          <div className="footer-actions">
            <a href="mailto:natthajina@gmail.com">natthajina@gmail.com</a>
            <a href="https://www.linkedin.com/in/natthapol-jinavanich/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Natthapol Jinavanich</p>
        </div>
      </div>
    </footer>
  );
}
