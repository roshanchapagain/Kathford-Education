import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle } from './AdminCommon';
const fonts = [
  'Cormorant Garamond',
  'DM Sans',
  'Inter',
  'Manrope',
  'Montserrat',
  'Poppins',
];
export default function ThemeAdmin() {
  const { data, setData, setMode } = useCms();
  const keys = Object.keys(data.sectionStyles);
  const setStyle = (section: string, key: string, value: any) =>
    setData((p) => ({
      ...p,
      sectionStyles: {
        ...p.sectionStyles,
        [section]: { ...p.sectionStyles[section], [key]: value },
      },
    }));
  return (
    <>
      <PageTitle
        title="Theme & Fonts"
        sub="Change appearance globally and style each section independently."
      />
      <Card title="Appearance">
        <Field label="Default mode">
          <select
            value={data.mode}
            onChange={(e) => setMode(e.target.value as any)}
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </Field>
      </Card>
      {keys.map((k) => {
        const s = data.sectionStyles[k];
        return (
          <Card key={k} title={`${k[0].toUpperCase() + k.slice(1)} section`}>
            <div className="admin-grid theme-grid">
              <Field label="Light background">
                <input
                  type="color"
                  value={s.background}
                  onChange={(e) => setStyle(k, 'background', e.target.value)}
                />
              </Field>
              <Field label="Dark background">
                <input
                  type="color"
                  value={s.backgroundDark}
                  onChange={(e) =>
                    setStyle(k, 'backgroundDark', e.target.value)
                  }
                />
              </Field>
              <Field label="Light text">
                <input
                  type="color"
                  value={s.text}
                  onChange={(e) => setStyle(k, 'text', e.target.value)}
                />
              </Field>
              <Field label="Dark text">
                <input
                  type="color"
                  value={s.textDark}
                  onChange={(e) => setStyle(k, 'textDark', e.target.value)}
                />
              </Field>
              <Field label="Light heading">
                <input
                  type="color"
                  value={s.heading}
                  onChange={(e) => setStyle(k, 'heading', e.target.value)}
                />
              </Field>
              <Field label="Dark heading">
                <input
                  type="color"
                  value={s.headingDark}
                  onChange={(e) => setStyle(k, 'headingDark', e.target.value)}
                />
              </Field>
              <Field label="Accent">
                <input
                  type="color"
                  value={s.accent}
                  onChange={(e) => setStyle(k, 'accent', e.target.value)}
                />
              </Field>
              <Field label="Heading font">
                <select
                  value={s.headingFont}
                  onChange={(e) => setStyle(k, 'headingFont', e.target.value)}
                >
                  {fonts.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </Field>
              <Field label="Body font">
                <select
                  value={s.bodyFont}
                  onChange={(e) => setStyle(k, 'bodyFont', e.target.value)}
                >
                  {fonts.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </Field>
              <Field label="Card radius">
                <input
                  type="number"
                  min="0"
                  max="40"
                  value={s.radius}
                  onChange={(e) =>
                    setStyle(k, 'radius', Number(e.target.value))
                  }
                />
              </Field>
            </div>
          </Card>
        );
      })}
    </>
  );
}
