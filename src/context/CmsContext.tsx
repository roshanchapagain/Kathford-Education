import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { defaultData, type CmsData } from '../data/defaultData';

const KEY = 'kathford-cms-v2';

type Ctx = {
  data: CmsData;
  setData: React.Dispatch<React.SetStateAction<CmsData>>;
  update: (path: string, value: unknown) => void;
  reset: () => void;
  exportData: () => string;
  importData: (json: string) => boolean;
  effectiveMode: 'light' | 'dark';
  setMode: (mode: CmsData['mode']) => void;
};

const CmsContext = createContext<Ctx | null>(null);

function setByPath<T extends object>(
  source: T,
  path: string,
  value: unknown,
): T {
  const clone = structuredClone(source);
  const parts = path.split('.');
  let cursor: any = clone;
  for (let i = 0; i < parts.length - 1; i++) cursor = cursor[parts[i]];
  cursor[parts[parts.length - 1]] = value;
  return clone;
}

export function CmsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CmsData>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
    } catch {
      return defaultData;
    }
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false,
  );

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) return;
    const fn = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    media.addEventListener?.('change', fn);
    return () => media.removeEventListener?.('change', fn);
  }, []);

  const effectiveMode =
    data.mode === 'system' ? (systemDark ? 'dark' : 'light') : data.mode;
  useEffect(() => {
    document.documentElement.dataset.theme = effectiveMode;
  }, [effectiveMode]);
  useEffect(() => {
    document.title = data.seo.title;
    const meta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    meta('description', data.seo.description);
    meta('keywords', data.seo.keywords);
  }, [data.seo]);

  const value = useMemo<Ctx>(
    () => ({
      data,
      setData,
      update: (path, value) => setData((prev) => setByPath(prev, path, value)),
      reset: () => {
        localStorage.removeItem(KEY);
        setData(defaultData);
      },
      exportData: () => JSON.stringify(data, null, 2),
      importData: (json) => {
        try {
          setData(JSON.parse(json));
          return true;
        } catch {
          return false;
        }
      },
      effectiveMode,
      setMode: (mode) => setData((prev) => ({ ...prev, mode })),
    }),
    [data, effectiveMode],
  );
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms() {
  const ctx = useContext(CmsContext);
  if (!ctx) throw new Error('useCms must be inside CmsProvider');
  return ctx;
}
