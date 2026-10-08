import { useUIStore } from "@stores/useUIStore";
import css from './ThemeSwitch.module.css';

import {
  Moon3 as IconMoon,
  Sun as IconSun,
  Autobrightness as IconAuto,
} from 'reicon-react';

const tabs = [
  { value: "light", Icon: IconSun },
  { value: "dark", Icon: IconMoon },
  { value: "auto", Icon: IconAuto },
];

export default function ThemeSwitch() {
  const theme = useUIStore((s) => s.theme);
  const setTheme = useUIStore((s) => s.setTheme);

  return (
    <div className={css['theme-switch']}>
      {tabs.map(({ value, Icon }) => (
        <div
          key={value}
          onClick={() => setTheme(value)}
          className={[
            css.tab,
            theme === value ? css.active : "",
          ].filter(Boolean).join(" ")}>
          <Icon
            size={20}
            weight={theme === value ? "Filled" : "Outline"}
          />
        </div>
      ))}
    </div>
  );
}