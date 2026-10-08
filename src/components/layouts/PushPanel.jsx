import { useUIStore } from '@stores/useUIStore';
import { NavLink } from 'react-router-dom';
import './PushPanel.css';

import {
  X as IconClose,
  Home4 as IconHome,
  TestTube as IconLab,
  Book as IconDocs,
  Palette2 as IconPalette,
  Bookmark as IconBookmark,
  UserHeart as IconAbout,
} from 'reicon-react';
import ThemeSwitch from '../widgets/ThemeSwitch';


export default function PushPanel({ active }) {
  const close = useUIStore((s) => s.closePanel);
  const { book, lab } = useUIStore((s) => s.page);

  const views = [
    { to: '/', Icon: IconHome, label: 'Home', end: true },
    { to: `/lab/${lab}`, Icon: IconLab, label: 'Lab' },
    { to: `/book/${book}`, Icon: IconDocs, label: 'Book' },
    { to: '/palette', Icon: IconPalette, label: 'Palette' },
    { to: '/bookmarks', Icon: IconBookmark, label: 'Bookmark' },
    { to: '/about', Icon: IconAbout, label: 'About' },
  ]


  return (
    <div id="push-panel" className={active ? "active" : ""}>
      <div className="header">
        <div className="title"> Color App </div>
        <div className="btn" onClick={close}> <IconClose size={28} /> </div>
      </div>
      <div className="body">
        {views.map(({ to, label, end, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={close}
            className={({ isActive }) => isActive ? "active nav" : "nav"}>
            {({ isActive }) => (
              <>
                <div className="icon"> <Icon weight={isActive ? "Filled" : "Outline"} /> </div>
                <div className="label"> {label} </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="footer">
        <span> Theme </span>
        <ThemeSwitch />
      </div>
    </div>
  )
}