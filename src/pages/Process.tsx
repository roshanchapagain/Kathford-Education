import { useCms } from '../context/CmsContext';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
export default function Process() {
  const { data } = useCms();
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="A clear step-by-step journey from counseling to your departure."
        image={data.hero.imageUrl}
      />
      <Section name="process">
        <div className="container">
          <SectionHeading
            label="How It Works"
            title="Five Steps to Your Dream"
          />
          <div className="process-list">
            {data.process.map((p, i) => (
              <div className="process-item" key={p.id}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
