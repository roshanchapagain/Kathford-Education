import type { CSSProperties, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
export default function Home() {
  const { data, effectiveMode } = useCms();
  const heroS = data.sectionStyles.hero;
  const sections: Record<string, ReactElement> = {
    destinations: (
      <Section name="destinations">
        <div className="container">
          <SectionHeading
            label="Study Destinations"
            title="Choose Your Country"
            text="Dedicated counseling for leading study destinations with visa, scholarship and university support."
          />
          <div className="country-grid">
            {data.countries
              .filter((c) => c.featured)
              .map((c) => (
                <Link
                  to={`/destinations/${c.slug}`}
                  className="country-card"
                  key={c.id}
                >
                  <img src={c.flagUrl} />
                  <div>
                    <h3>{c.name}</h3>
                    <p>{c.tagline}</p>
                  </div>
                  <b>→</b>
                </Link>
              ))}
          </div>
        </div>
      </Section>
    ),
    services: (
      <Section name="services">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="Everything You Need"
            text="End-to-end support from your first consultation to departure day."
          />
          <div className="service-grid">
            {data.services.map((s) => (
              <div className="service-card" key={s.id}>
                <span>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <Link className="text-link" to="/services">
              Explore all services →
            </Link>
          </div>
        </div>
      </Section>
    ),
    process: (
      <Section name="process">
        <div className="container">
          <SectionHeading
            label="How It Works"
            title="Five Steps to Your Dream"
            text="A simple, transparent process from counseling to departure."
          />
          <div className="steps">
            {data.process.map((p, i) => (
              <div className="step" key={p.id}>
                <div>{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    ),
    visa: (
      <Section name="visa">
        <div className="container visa-grid">
          <img src={data.visa.imageUrl} />
          <div>
            <SectionHeading
              label="Visa Support"
              title={data.visa.title}
              text={data.visa.description}
            />
            <ul className="check-list">
              {data.visa.bullets.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
            <Link className="primary-btn inline" to="/visa">
              Visa Support Details
            </Link>
          </div>
        </div>
      </Section>
    ),
    testimonials: (
      <Section name="testimonials">
        <div className="container">
          <SectionHeading
            label="Student Stories"
            title="What Our Students Say"
          />
          <div className="testimonial-grid">
            {data.testimonials.map((t) => (
              <div className="testimonial" key={t.id}>
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <p>“{t.quote}”</p>
                <div className="author">
                  <span>{t.avatar}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.destination}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    ),
    branches: (
      <Section name="branches">
        <div className="container">
          <SectionHeading
            label="Visit Us"
            title="Our Branches"
            text="Meet our counselors in person for a free consultation."
          />
          <div className="branch-grid">
            {data.branches.map((b) => (
              <div className="branch-card" key={b.id}>
                <iframe src={b.mapEmbed} loading="lazy"></iframe>
                <div>
                  <span className="pill">{b.tag}</span>
                  <h3>{b.city}</h3>
                  <p>{b.address}</p>
                  <p>☎ {b.phone}</p>
                  <p>✉ {b.email}</p>
                  <p>◷ {b.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    ),
  };
  return (
    <>
      <section
        className="hero"
        style={
          {
            backgroundImage: `linear-gradient(90deg,rgba(7,20,42,.9),rgba(7,20,42,.34)),url(${data.hero.imageUrl})`,
            '--sec-heading':
              effectiveMode === 'dark' ? heroS.headingDark : heroS.heading,
            '--heading-font': heroS.headingFont,
            '--body-font': heroS.bodyFont,
          } as CSSProperties
        }
      >
        <div className="hero-inner">
          <span>{data.hero.eyebrow}</span>
          <h1>
            {data.hero.title}
            <br />
            <em>{data.hero.emphasis}</em>
          </h1>
          <p>{data.hero.description}</p>
          <div>
            <Link className="primary-btn" to={data.hero.primaryHref}>
              {data.hero.primaryLabel} →
            </Link>
            <a className="hero-ghost" href={data.hero.secondaryHref}>
              {data.hero.secondaryLabel}
            </a>
          </div>
        </div>
      </section>
      <Section name="stats" className="stats-sec">
        <div className="stats-grid">
          {data.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </Section>
      {data.sectionOrder
        .filter((k) => data.sectionVisibility[k])
        .map((k) => (
          <div key={k}>{sections[k]}</div>
        ))}
    </>
  );
}
