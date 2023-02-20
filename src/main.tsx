import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './assets/styles/index.css';
import { Home, About, Plan, ErrorPage, Navbar, Footer } from '@/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/plan',
    element: <Plan />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-lightCream">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
