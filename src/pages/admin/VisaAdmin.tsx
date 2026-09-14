import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle, uploadFile } from './AdminCommon';
export default function VisaAdmin() {
  const { data, update, setData } = useCms();
  return (
    <>
      <PageTitle title="Visa" sub="Edit visa page and homepage visa content." />
      <Card title="Visa content">
        <Field label="Title">
          <input
            value={data.visa.title}
            onChange={(e) => update('visa.title', e.target.value)}
          />
        </Field>
        <Field label="Description">
          <textarea
            value={data.visa.description}
            onChange={(e) => update('visa.description', e.target.value)}
          />
        </Field>
        <Field label="Section image">
          <input
            type="file"
            onChange={(e) => uploadFile(e, (v) => update('visa.imageUrl', v))}
          />
        </Field>
        <Field label="Page banner">
          <input
            type="file"
            onChange={(e) =>
              uploadFile(e, (v) => update('visa.pageBannerUrl', v))
            }
          />
        </Field>
        {data.visa.bullets.map((b, i) => (
          <input
            key={i}
            value={b}
            onChange={(e) =>
              setData((p) => ({
                ...p,
                visa: {
                  ...p.visa,
                  bullets: p.visa.bullets.map((x, j) =>
                    j === i ? e.target.value : x,
                  ),
                },
              }))
            }
          />
        ))}
      </Card>
    </>
  );
}
