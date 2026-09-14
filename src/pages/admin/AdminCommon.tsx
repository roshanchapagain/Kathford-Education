import { type ChangeEvent, type ReactNode } from 'react';
export const Field = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <label className="admin-field">
    <span>{label}</span>
    {children}
  </label>
);
export const Card = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="admin-card">
    <h3>{title}</h3>
    {children}
  </div>
);
export const PageTitle = ({ title, sub }: { title: string; sub: string }) => (
  <div className="admin-title">
    <div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  </div>
);
export function uploadFile(
  e: ChangeEvent<HTMLInputElement>,
  cb: (v: string) => void,
) {
  const f = e.target.files?.[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => cb(String(r.result));
  r.readAsDataURL(f);
}
