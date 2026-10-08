import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@router';
import '@css/global.css';

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
);
