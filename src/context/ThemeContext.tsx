import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { themes as baseThemes, type Theme } from '../config/themes';

interface ThemeContextValue {
  theme: Theme;
  themes: Theme[];
  activeId: string;
  setActiveId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const c = theme.colors;
  root.style.setProperty('--ink', c.ink);
  root.style.setProperty('--ink-800', c.ink800);
  root.style.setProperty('--ink-700', c.ink700);
  root.style.setProperty('--bone', c.bone);
  root.style.setProperty('--sand', c.sand);
  root.style.setProperty('--stone-400', c.stone400);
  root.style.setProperty('--stone-500', c.stone500);
  root.style.setProperty('--stone-600', c.stone600);
  root.style.setProperty('--accent', c.accent);
  root.style.setProperty('--accent-light', c.accentLight);
  root.style.setProperty('--font-display', theme.fonts.display);
  root.style.setProperty('--font-sans', theme.fonts.sans);
  document.title = `${theme.property.name} — ${theme.property.location}`;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themes] = useState<Theme[]>(baseThemes);
  const [activeId, setActiveId] = useState<string>(baseThemes[0].id);

  const theme = useMemo(
    () => themes.find((t) => t.id === activeId) ?? themes[0],
    [themes, activeId]
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, themes, activeId, setActiveId }),
    [theme, themes, activeId]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

export function useProperty() {
  return useTheme().theme.property;
}
