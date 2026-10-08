import { useUIStore } from '@stores/useUIStore';
import './View.css';

export default function View({ children }) {
  const isOpen = useUIStore((s) => s.isPanelOpen);
  const close = useUIStore((s) => s.closePanel);
  return (
    <div
      id="view"
      className={isOpen ? 'push' : ''}
      onClick={()=> {if(isOpen) close()}}>
      {children}
    </div>
  )
}