import { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Card, Field, PageTitle } from './AdminCommon';
export default function SettingsAdmin() {
  const { data, update, exportData, importData, reset } = useCms();
  const [json, setJson] = useState('');
  const download = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(
      new Blob([exportData()], { type: 'application/json' }),
    );
    a.download = 'kathford-cms.json';
    a.click();
  };
  return (
    <>
      <PageTitle
        title="SEO & Data"
        sub="Search metadata, export/import and reset tools."
      />
      <Card title="SEO">
        <Field label="Page title">
          <input
            value={data.seo.title}
            onChange={(e) => update('seo.title', e.target.value)}
          />
        </Field>
        <Field label="Description">
          <textarea
            value={data.seo.description}
            onChange={(e) => update('seo.description', e.target.value)}
          />
        </Field>
        <Field label="Keywords">
          <textarea
            value={data.seo.keywords}
            onChange={(e) => update('seo.keywords', e.target.value)}
          />
        </Field>
      </Card>
      <Card title="Data tools">
        <div className="button-row">
          <button className="admin-btn" onClick={download}>
            Export JSON
          </button>
          <button
            className="admin-btn danger"
            onClick={() => confirm('Reset all CMS data?') && reset()}
          >
            Reset CMS
          </button>
        </div>
        <Field label="Import JSON">
          <textarea
            rows={10}
            value={json}
            onChange={(e) => setJson(e.target.value)}
            placeholder="Paste exported JSON here"
          />
        </Field>
        <button
          className="admin-btn"
          onClick={() => alert(importData(json) ? 'Imported' : 'Invalid JSON')}
        >
          Import
        </button>
      </Card>
    </>
  );
}
