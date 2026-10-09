import { useUIStore } from "@stores/useUIStore";
import { useDialog } from "@hooks/useDialog";
import { NavLink } from "react-router-dom";
import Fab from "@widgets/Fab";
import "./Navbar.css";

import {
  AlignRight as IconAnalyze,
  Bulb as IconShading,
  Colorfilter as IconColorsHarmony,
  Whisk as IconMix,
  Docs as IconDocs,
  List3 as IconList,
  CodeCircle as IconApi,
  Palette2 as PaletteIcon,
} from "reicon-react";

const navs = {
  lab: [
    { to: '/lab/mix', Icon: IconMix },
    { to: '/lab/harmony', Icon: IconColorsHarmony },
    { to: '/lab/shading', Icon: IconShading },
    { to: '/lab/analyze', Icon: IconAnalyze },
  ],
  book: [
    { to: '/book/api', Icon: IconApi },
    { to: '/book/list', Icon: IconList },
    { to: '/book/docs', Icon: IconDocs },
  ],
}

function Action({ view }) {
  if (view !== 'lab') return null;
  return (
    <Fab>
      <PaletteIcon weight="Filled" />
    </Fab>
  )
}

function Bar({view}) {
  return navs[view].map(({ to, Icon }) => (
    <NavLink 
      to={to}
      key={to}
      className={({ isActive }) => isActive ? 'active nav' : 'nav'}>
      {({ isActive }) => <Icon weight={isActive ? "Filled" : "Outline"} />}
    </NavLink>
  ));
}

export default function Navbar() {
  const view = useUIStore((s) => s.view);
  const isShow = view == 'lab' || view == 'book';
  if (!isShow) return null;
  return (
    <div id="navbar">
      <div className="foreground">
        <div className="bar"> 
          <Bar view={view}/>
        </div>
        <Action view={view} />
      </div>
    </div>
  )
}
