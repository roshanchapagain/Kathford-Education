import { NavLink, Outlet, Link } from 'react-router-dom';
export default function AdminLayout() {
  const links = [
    ['Overview', '/admin'],
    ['Homepage', '/admin/home'],
    ['Countries', '/admin/countries'],
    ['Services', '/admin/services'],
    ['Process', '/admin/process'],
    ['Visa', '/admin/visa'],
    ['Testimonials', '/admin/testimonials'],
    ['Branches', '/admin/branches'],
    ['Navigation', '/admin/navigation'],
    ['Theme & Fonts', '/admin/theme'],
    ['Branding & Footer', '/admin/site'],
    ['SEO & Data', '/admin/settings'],
  ];
  return (
    <div className="admin-shell">
      <aside>
        <div className="admin-brand">
          <strong>Kathford-Admin</strong>
          <span>Frontend CMS</span>
        </div>
        {links.map(([l, h]) => (
          <NavLink end={h === '/admin'} key={h} to={h}>
            {l}
          </NavLink>
        ))}
        <Link to="/" className="back-site">
          ← View Website
        </Link>
      </aside>
      <section className="admin-main">
        <Outlet />
      </section>
    </div>
  );
}
