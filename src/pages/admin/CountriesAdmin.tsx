import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle, uploadFile } from './AdminCommon';
export default function CountriesAdmin() {
  const { data, setData } = useCms();
  const upd = (i: number, k: string, v: any) =>
    setData((p) => ({
      ...p,
      countries: p.countries.map((c, j) => (j === i ? { ...c, [k]: v } : c)),
    }));
  return (
    <>
      <PageTitle
        title="Countries"
        sub="Flags, destination banners and page content are fully editable."
      />
      {data.countries.map((c, i) => (
        <Card key={c.id} title={c.name}>
          <div className="admin-grid">
            <Field label="Country name">
              <input
                value={c.name}
                onChange={(e) => upd(i, 'name', e.target.value)}
              />
            </Field>
            <Field label="Slug">
              <input
                value={c.slug}
                onChange={(e) => upd(i, 'slug', e.target.value)}
              />
            </Field>
            <Field label="Tagline">
              <input
                value={c.tagline}
                onChange={(e) => upd(i, 'tagline', e.target.value)}
              />
            </Field>
            <Field label="Description">
              <textarea
                value={c.description}
                onChange={(e) => upd(i, 'description', e.target.value)}
              />
            </Field>
            <Field label="Flag upload">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => uploadFile(e, (v) => upd(i, 'flagUrl', v))}
              />
            </Field>
            <Field label="Banner upload">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => uploadFile(e, (v) => upd(i, 'bannerUrl', v))}
              />
            </Field>
          </div>
          <div className="asset-row">
            <img src={c.flagUrl} />
            <img src={c.bannerUrl} />
          </div>
        </Card>
      ))}
    </>
  );
}
