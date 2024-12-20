import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login';
import Admin from './admin';
import ProtectedRoute from './ProtectedRoute';
import AdminNURSE from './NURSE/admin';
import Super from './super';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute allowedRole="/admin">
      <Admin />
    </ProtectedRoute>
    ),
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute allowedRole="/admin">
        <Admin/>
      </ProtectedRoute>
    ),
  },
  {
    path: "adminNURSE",
    element: (
      <ProtectedRoute allowedRole="/adminNURSE">
        <AdminNURSE/>
      </ProtectedRoute>
    ),
  },
  {
    path: "superadmin",
    element: (
      <ProtectedRoute allowedRole="/0ADMIN0">
        <Super/>
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = { router }/>
);
reportWebVitals();
