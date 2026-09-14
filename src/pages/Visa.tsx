import { useCms } from '../context/CmsContext';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
export default function Visa() {
  const { data } = useCms();
  return (
    <>
      <PageHero
        title="Visa Guidance"
        subtitle="Prepare a complete, confident and well-organized student visa application."
        image={data.visa.pageBannerUrl}
      />
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
          </div>
        </div>
      </Section>
    </>
  );
}
