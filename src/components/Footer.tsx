import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
export default function Footer() {
  const { data, effectiveMode } = useCms();
  const s = data.sectionStyles.footer;
  return (
    <footer
      className="footer"
      style={
        {
          '--sec-bg':
            effectiveMode === 'dark' ? s.backgroundDark : s.background,
          '--sec-text': effectiveMode === 'dark' ? s.textDark : s.text,
          '--sec-heading': effectiveMode === 'dark' ? s.headingDark : s.heading,
          '--sec-accent': s.accent,
          '--heading-font': s.headingFont,
          '--body-font': s.bodyFont,
        } as CSSProperties
      }
    >
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <img
              src={data.branding.logoLightUrl || data.branding.logoUrl}
              alt={data.branding.logoAlt}
            />
            <span>
              <strong>{data.branding.siteName}</strong>
              <small>{data.branding.subtitle}</small>
            </span>
          </div>
          <p>{data.footer.description}</p>
          <div className="social-row">
            <a href={data.footer.facebook}>Facebook</a>
            <a href={data.footer.instagram}>Instagram</a>
            <a href={data.footer.tiktok}>TikTok</a>
            <a href={data.footer.youtube}>YouTube</a>
          </div>
        </div>
        <div>
          <h4>Destinations</h4>
          {data.countries.slice(0, 6).map((c) => (
            <Link key={c.id} to={`/destinations/${c.slug}`}>
              {c.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Quick Links</h4>
          {data.navigation
            .filter((n) => n.visible)
            .map((n) => (
              <Link key={n.label} to={n.href}>
                {n.label}
              </Link>
            ))}
        </div>
        <div>
          <h4>Contact</h4>
          {data.branches.map((b) => (
            <div key={b.id} className="footer-contact">
              <strong>{b.city}</strong>
              <span>{b.phone}</span>
              <span>{b.email}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        {data.footer.copyright}
        <Link to="/admin">Kathford-Admin</Link>
      </div>
    </footer>
  );
}
