import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle, uploadFile } from './AdminCommon';
export default function SiteAdmin() {
  const { data, update } = useCms();
  return (
    <>
      <PageTitle
        title="Branding & Footer"
        sub="Logo, site identity, social links and footer content."
      />
      <Card title="Branding">
        <div className="admin-grid">
          <Field label="Site name">
            <input
              value={data.branding.siteName}
              onChange={(e) => update('branding.siteName', e.target.value)}
            />
          </Field>
          <Field label="Subtitle">
            <input
              value={data.branding.subtitle}
              onChange={(e) => update('branding.subtitle', e.target.value)}
            />
          </Field>
          <Field label="Logo">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                uploadFile(e, (v) => update('branding.logoUrl', v))
              }
            />
          </Field>
          <Field label="Light logo">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                uploadFile(e, (v) => update('branding.logoLightUrl', v))
              }
            />
          </Field>
          <Field label="Logo width">
            <input
              type="number"
              value={data.branding.logoWidth}
              onChange={(e) =>
                update('branding.logoWidth', Number(e.target.value))
              }
            />
          </Field>
          <Field label="Alt text">
            <input
              value={data.branding.logoAlt}
              onChange={(e) => update('branding.logoAlt', e.target.value)}
            />
          </Field>
        </div>
        <div className="asset-row">
          <img src={data.branding.logoUrl} />
          <img src={data.branding.logoLightUrl} />
        </div>
      </Card>
      <Card title="Footer">
        <Field label="Description">
          <textarea
            value={data.footer.description}
            onChange={(e) => update('footer.description', e.target.value)}
          />
        </Field>
        <Field label="Copyright">
          <input
            value={data.footer.copyright}
            onChange={(e) => update('footer.copyright', e.target.value)}
          />
        </Field>
        <div className="admin-grid">
          {(['facebook', 'instagram', 'tiktok', 'youtube'] as const).map(
            (k) => (
              <Field key={k} label={k}>
                <input
                  value={data.footer[k]}
                  onChange={(e) => update(`footer.${k}`, e.target.value)}
                />
              </Field>
            ),
          )}
        </div>
      </Card>
    </>
  );
}
