import { Menu } from 'reicon-react';
import { useUIStore } from '@stores/useUIStore';
import './Appbar.css';

export default function Appbar() {
  const title = useUIStore((s) => s.title);
  const open = useUIStore((s) => s.openPanel);
  return (
    <div id="appbar">
      <div className="foreground">
        <div className="title"> {title} </div>
        <div className="end">
          <div className="btn" onClick={open}> <Menu size={28} /> </div>
        </div>
      </div>
    </div>
  )
}