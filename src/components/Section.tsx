import { type ReactNode, type CSSProperties } from 'react';
import { useCms } from '../context/CmsContext';
export default function Section({
  name,
  children,
  className = '',
}: {
  name: string;
  children: ReactNode;
  className?: string;
}) {
  const { data, effectiveMode } = useCms();
  const s = data.sectionStyles[name] || data.sectionStyles.destinations;
  return (
    <section
      className={`section ${className}`}
      style={
        {
          '--sec-bg':
            effectiveMode === 'dark' ? s.backgroundDark : s.background,
          '--sec-text': effectiveMode === 'dark' ? s.textDark : s.text,
          '--sec-heading': effectiveMode === 'dark' ? s.headingDark : s.heading,
          '--sec-accent': s.accent,
          '--heading-font': s.headingFont,
          '--body-font': s.bodyFont,
          '--radius': `${s.radius}px`,
        } as CSSProperties
      }
    >
      {children}
    </section>
  );
}
