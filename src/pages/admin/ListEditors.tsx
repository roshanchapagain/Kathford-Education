import { useCms } from '../../context/CmsContext';
import { Card, PageTitle } from './AdminCommon';
export function ServicesAdmin() {
  const { data, setData } = useCms();
  return (
    <>
      <PageTitle title="Services" sub="Edit all service cards." />
      <Card title="Services">
        {data.services.map((x, i) => (
          <div className="repeat-row" key={x.id}>
            <input
              value={x.icon}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  services: p.services.map((s, j) =>
                    j === i ? { ...s, icon: e.target.value } : s,
                  ),
                }))
              }
            />
            <input
              value={x.title}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  services: p.services.map((s, j) =>
                    j === i ? { ...s, title: e.target.value } : s,
                  ),
                }))
              }
            />
            <textarea
              value={x.description}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  services: p.services.map((s, j) =>
                    j === i ? { ...s, description: e.target.value } : s,
                  ),
                }))
              }
            />
          </div>
        ))}
      </Card>
    </>
  );
}
export function ProcessAdmin() {
  const { data, setData } = useCms();
  return (
    <>
      <PageTitle title="Process" sub="Edit the study-abroad journey." />
      <Card title="Steps">
        {data.process.map((x, i) => (
          <div className="repeat-row" key={x.id}>
            <input
              value={x.title}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  process: p.process.map((s, j) =>
                    j === i ? { ...s, title: e.target.value } : s,
                  ),
                }))
              }
            />
            <textarea
              value={x.description}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  process: p.process.map((s, j) =>
                    j === i ? { ...s, description: e.target.value } : s,
                  ),
                }))
              }
            />
          </div>
        ))}
      </Card>
    </>
  );
}
export function TestimonialsAdmin() {
  const { data, setData } = useCms();
  return (
    <>
      <PageTitle title="Testimonials" sub="Edit student success stories." />
      <Card title="Testimonials">
        {data.testimonials.map((x, i) => (
          <div className="repeat-row" key={x.id}>
            <input
              value={x.name}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  testimonials: p.testimonials.map((s, j) =>
                    j === i ? { ...s, name: e.target.value } : s,
                  ),
                }))
              }
            />
            <input
              value={x.destination}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  testimonials: p.testimonials.map((s, j) =>
                    j === i ? { ...s, destination: e.target.value } : s,
                  ),
                }))
              }
            />
            <textarea
              value={x.quote}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  testimonials: p.testimonials.map((s, j) =>
                    j === i ? { ...s, quote: e.target.value } : s,
                  ),
                }))
              }
            />
          </div>
        ))}
      </Card>
    </>
  );
}
export function BranchesAdmin() {
  const { data, setData } = useCms();
  return (
    <>
      <PageTitle
        title="Branches"
        sub="Edit office contact details and map embeds."
      />
      {data.branches.map((x, i) => (
        <Card key={x.id} title={x.city}>
          <div className="admin-grid">
            {(
              [
                'city',
                'tag',
                'address',
                'phone',
                'whatsapp',
                'email',
                'hours',
                'mapEmbed',
              ] as const
            ).map((k) => (
              <label className="admin-field" key={k}>
                <span>{k}</span>
                <input
                  value={x[k]}
                  onChange={(e) =>
                    setData((p) => ({
                      ...p,
                      branches: p.branches.map((s, j) =>
                        j === i ? { ...s, [k]: e.target.value } : s,
                      ),
                    }))
                  }
                />
              </label>
            ))}
          </div>
        </Card>
      ))}
    </>
  );
}
