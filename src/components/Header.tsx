import { Link, NavLink } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
import ThemeToggle from './ThemeToggle';
export default function Header() {
  const { data, effectiveMode } = useCms();
  const logo =
    effectiveMode === 'dark' && data.branding.logoLightUrl
      ? data.branding.logoLightUrl
      : data.branding.logoUrl;
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand">
          <img
            src={logo}
            alt={data.branding.logoAlt}
            style={{ width: data.branding.logoWidth }}
          />
          <span>
            <strong>{data.branding.siteName}</strong>
            <small>{data.branding.subtitle}</small>
          </span>
        </Link>
        <nav className="nav-links">
          {data.navigation
            .filter((n) => n.visible)
            .map((n) => (
              <NavLink key={n.label} to={n.href}>
                {n.label}
              </NavLink>
            ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="ghost-btn" href="tel:9857075475">
            Call Us
          </a>
          <Link className="primary-btn" to="/contact">
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
