import { useCms } from '../context/CmsContext';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
export default function Services() {
  const { data } = useCms();
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete study-abroad support, from your first conversation to departure."
        image={data.hero.imageUrl}
      />
      <Section name="services">
        <div className="container">
          <SectionHeading
            label="Student Support"
            title="Everything You Need in One Place"
          />
          <div className="service-grid large">
            {data.services.map((s) => (
              <div className="service-card" key={s.id}>
                <span>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
