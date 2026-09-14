import { useCms } from '../context/CmsContext';
export default function ThemeToggle() {
  const { data, setMode } = useCms();
  const next =
    data.mode === 'light' ? 'dark' : data.mode === 'dark' ? 'system' : 'light';
  const label =
    data.mode === 'light' ? '☀️' : data.mode === 'dark' ? '🌙' : '🖥️';
  return (
    <button
      className="icon-btn"
      onClick={() => setMode(next)}
      title={`Theme: ${data.mode}`}
    >
      {label}
    </button>
  );
}
