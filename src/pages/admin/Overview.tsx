import { useCms } from '../../context/CmsContext';
import { PageTitle } from './AdminCommon';
export default function Overview() {
  const { data } = useCms();
  return (
    <>
      <PageTitle
        title="Kathford-Admin"
        sub="Manage the complete public frontend without touching React code."
      />
      <div className="metric-grid">
        <div>
          <strong>{data.countries.length}</strong>
          <span>Countries</span>
        </div>
        <div>
          <strong>{data.services.length}</strong>
          <span>Services</span>
        </div>
        <div>
          <strong>{data.testimonials.length}</strong>
          <span>Testimonials</span>
        </div>
        <div>
          <strong>{data.branches.length}</strong>
          <span>Branches</span>
        </div>
      </div>
      <div className="admin-card">
        <h3>Frontend CMS ready</h3>
        <p>
          Content, images, navigation, colors, fonts, section order, dark/light
          appearance and SEO are currently saved in browser localStorage. Later
          replace the storage layer with your backend/database API.
        </p>
      </div>
    </>
  );
}
