import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout';
import ErrorPage from './error-page';
import routes from './routes/routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes} />
  </React.StrictMode>,
)
