export function Footer({ footerData, name }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} {name}. {footerData.copyright}
        </p>
        <div className="footer-links">
          <span className="footer-badge">{footerData.hostedOn}</span>
          <a href="#inicio" className="footer-back-to-top">
            {footerData.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
