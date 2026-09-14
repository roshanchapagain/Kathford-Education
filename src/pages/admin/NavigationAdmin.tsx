import { useCms } from '../../context/CmsContext';
import { Card, PageTitle } from './AdminCommon';
export default function NavigationAdmin() {
  const { data, setData } = useCms();
  return (
    <>
      <PageTitle
        title="Navigation"
        sub="Control header links and visibility."
      />
      <Card title="Menu">
        {data.navigation.map((n, i) => (
          <div className="repeat-row" key={i}>
            <input
              value={n.label}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  navigation: p.navigation.map((x, j) =>
                    j === i ? { ...x, label: e.target.value } : x,
                  ),
                }))
              }
            />
            <input
              value={n.href}
              onChange={(e) =>
                setData((p) => ({
                  ...p,
                  navigation: p.navigation.map((x, j) =>
                    j === i ? { ...x, href: e.target.value } : x,
                  ),
                }))
              }
            />
            <label>
              <input
                type="checkbox"
                checked={n.visible}
                onChange={(e) =>
                  setData((p) => ({
                    ...p,
                    navigation: p.navigation.map((x, j) =>
                      j === i ? { ...x, visible: e.target.checked } : x,
                    ),
                  }))
                }
              />{' '}
              Visible
            </label>
          </div>
        ))}
      </Card>
    </>
  );
}
