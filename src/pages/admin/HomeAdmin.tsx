import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle, uploadFile } from './AdminCommon';
export default function HomeAdmin() {
  const { data, update, setData } = useCms();
  return (
    <>
      <PageTitle
        title="Homepage"
        sub="Edit hero, statistics, section visibility and order."
      />
      <Card title="Hero">
        <div className="admin-grid">
          <Field label="Eyebrow">
            <input
              value={data.hero.eyebrow}
              onChange={(e) => update('hero.eyebrow', e.target.value)}
            />
          </Field>
          <Field label="Title">
            <input
              value={data.hero.title}
              onChange={(e) => update('hero.title', e.target.value)}
            />
          </Field>
          <Field label="Emphasis">
            <input
              value={data.hero.emphasis}
              onChange={(e) => update('hero.emphasis', e.target.value)}
            />
          </Field>
          <Field label="Description">
            <textarea
              value={data.hero.description}
              onChange={(e) => update('hero.description', e.target.value)}
            />
          </Field>
          <Field label="Cover image">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadFile(e, (v) => update('hero.imageUrl', v))}
            />
          </Field>
        </div>
        <img className="admin-preview" src={data.hero.imageUrl} />
      </Card>
      <Card title="Statistics">
        <div className="repeat-list">
          {data.stats.map((s, i) => (
            <div className="repeat-row" key={i}>
              <input
                value={s.value}
                onChange={(e) =>
                  setData((p) => ({
                    ...p,
                    stats: p.stats.map((x, j) =>
                      j === i ? { ...x, value: e.target.value } : x,
                    ),
                  }))
                }
              />
              <input
                value={s.label}
                onChange={(e) =>
                  setData((p) => ({
                    ...p,
                    stats: p.stats.map((x, j) =>
                      j === i ? { ...x, label: e.target.value } : x,
                    ),
                  }))
                }
              />
            </div>
          ))}
        </div>
      </Card>
      <Card title="Homepage sections">
        <div className="section-order">
          {data.sectionOrder.map((k, i) => (
            <div key={k}>
              <input
                type="checkbox"
                checked={data.sectionVisibility[k]}
                onChange={(e) =>
                  setData((p) => ({
                    ...p,
                    sectionVisibility: {
                      ...p.sectionVisibility,
                      [k]: e.target.checked,
                    },
                  }))
                }
              />
              <strong>{k}</strong>
              <button
                onClick={() =>
                  setData((p) => {
                    if (i === 0) return p;
                    const a = [...p.sectionOrder];
                    [a[i - 1], a[i]] = [a[i], a[i - 1]];
                    return { ...p, sectionOrder: a };
                  })
                }
              >
                ↑
              </button>
              <button
                onClick={() =>
                  setData((p) => {
                    if (i === p.sectionOrder.length - 1) return p;
                    const a = [...p.sectionOrder];
                    [a[i + 1], a[i]] = [a[i], a[i + 1]];
                    return { ...p, sectionOrder: a };
                  })
                }
              >
                ↓
              </button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
