import { Link } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
export default function Destinations() {
  const { data } = useCms();
  return (
    <>
      <PageHero
        title="Study Destinations"
        subtitle="Explore study options, pathways and support for your preferred country."
        image={data.hero.imageUrl}
      />
      <Section name="destinations">
        <div className="container">
          <SectionHeading
            label="Destinations"
            title="Choose Where You Want to Study"
          />
          <div className="destination-cards">
            {data.countries.map((c) => (
              <Link
                className="destination-card"
                to={`/destinations/${c.slug}`}
                key={c.id}
              >
                <div
                  className="destination-banner"
                  style={{
                    backgroundImage: `linear-gradient(180deg,transparent,rgba(0,0,0,.7)),url(${c.bannerUrl})`,
                  }}
                >
                  <img src={c.flagUrl} />
                  <h3>{c.name}</h3>
                </div>
                <div>
                  <p>{c.description}</p>
                  <span>Explore {c.name} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
