import { useUIStore } from '@stores/useUIStore';
import { useMediaQuery } from '@hooks/useMediaQuery';
import './View.css';

export default function View({ children }) {
  const isOpen = useUIStore((s) => s.isPanelOpen);
  const close = useUIStore((s) => s.closePanel);

  const isDesktop = useMediaQuery("(min-width: 670px)");

  const handleClick = () => {
    if (isOpen && !isDesktop) {
      close();
    }
  }
  return (
    <div
      id="view"
      className={isOpen ? 'push' : ''}
      onClick={handleClick}>
      {children}
    </div>
  )
}