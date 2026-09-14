import { FormEvent, useState } from 'react';
import { useCms } from '../context/CmsContext';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
export default function Contact() {
  const { data } = useCms();
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <PageHero
        title={data.contact.pageTitle}
        subtitle={data.contact.pageSubtitle}
        image={data.contact.pageBannerUrl}
      />
      <Section name="branches">
        <div className="container contact-grid">
          <div>
            <h2>{data.contact.formTitle}</h2>
            <form className="contact-form" onSubmit={submit}>
              <div className="two">
                <input required placeholder="Full name" />
                <input required placeholder="Phone number" />
              </div>
              <div className="two">
                <input type="email" placeholder="Email address" />
                <select>
                  <option>Preferred destination</option>
                  {data.countries.map((c) => (
                    <option key={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <textarea
                rows={6}
                placeholder="Tell us about your study plans"
              ></textarea>
              <button className="primary-btn">Send Request</button>
              {sent && (
                <p className="form-note">
                  Frontend demo: form captured locally. Connect this to your
                  backend lead endpoint later.
                </p>
              )}
            </form>
          </div>
          <div className="contact-branches">
            {data.branches.map((b) => (
              <div className="contact-branch" key={b.id}>
                <span className="pill">{b.tag}</span>
                <h3>{b.city}</h3>
                <p>{b.address}</p>
                <a href={`tel:${b.phone}`}>☎ {b.phone}</a>
                <a href={`mailto:${b.email}`}>✉ {b.email}</a>
                <span>◷ {b.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
