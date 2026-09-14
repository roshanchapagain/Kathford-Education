import { Link, useParams } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
import Section from '../components/Section';
export default function CountryDetail() {
  const { slug } = useParams();
  const { data } = useCms();
  const c = data.countries.find((x) => x.slug === slug);
  if (!c) return <div className="notfound">Destination not found.</div>;
  return (
    <>
      <section
        className="country-hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(7,20,42,.9),rgba(7,20,42,.25)),url(${c.bannerUrl})`,
        }}
      >
        <div>
          <img src={c.flagUrl} />
          <span>Study Destination</span>
          <h1>Study in {c.name}</h1>
          <p>{c.tagline}</p>
        </div>
      </section>
      <Section name="destinations">
        <div className="container country-detail">
          <div>
            <h2>Why study in {c.name}?</h2>
            <p>{c.description}</p>
            <div className="highlight-grid">
              {c.highlights.map((x) => (
                <div key={x}>✓ {x}</div>
              ))}
            </div>
          </div>
          <aside>
            <h3>Start your application</h3>
            <p>
              Talk to a Kathford counselor for profile review, course selection
              and application guidance.
            </p>
            <Link className="primary-btn inline" to="/contact">
              Free Counseling
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
