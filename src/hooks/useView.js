import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useUIStore } from "@stores/useUIStore";

export function useView() {
  const location = useLocation();
  const setView = useUIStore((s) => s.setView);

  useEffect(() => {
    let currentView = 'home';
    const path = location.pathname;

    if (path.startsWith('/lab')) currentView = 'lab';
    else if (path.startsWith('/book')) currentView = 'book';
    else if (path.startsWith('/palette')) currentView = 'palette';
    else if (path.startsWith('/about')) currentView = 'about';
    else if (path.startsWith('/bookmarks')) currentView = 'bookmarks';
    
    setView(currentView);
  }, [location.pathname, setView]);
}