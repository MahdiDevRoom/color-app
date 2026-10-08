import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useUIStore } from '@stores/useUIStore';

const routeTitles = {
  '/': 'Color App',
  '/palette': 'My Palette',
  '/about': 'About Us',
  '/bookmarks': 'Bookmarks',
  '/lab': 'Color Lab',
  '/book': 'Documentation',
}

export default function useTitle() {
  const location = useLocation();
  const setTitle = useUIStore((s) => s.setTitle);

  useEffect(() => {
    let title = routeTitles[location.pathname]
    if (!title) {
      const matchedKey = Object.keys(routeTitles).find(key => location.pathname.startsWith(key) && key !== '/')
      if (matchedKey) title = routeTitles[matchedKey]
    }
    setTitle(title || 'Color App')
    document.title = title || 'Color App'
  }, [location.pathname, setTitle]);
}