import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useUIStore } from "@stores/useUIStore";

export function usePage() {
  const location = useLocation();
  const setPage = useUIStore((s) => s.setPage);

  useEffect(() => {
    const path = location.pathname;
    const parts = path.split('/').filter(Boolean);

    if (parts[0] === 'lab' && parts[1]) {
      setPage({ lab: parts[1] });
    } else if (parts[0] === 'book') {
      if (parts[1]) {
        setPage({ book: parts[1] });
      }
    }
  }, [location.pathname, setPage]);
}