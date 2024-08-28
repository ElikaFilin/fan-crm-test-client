import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getRoutes } from '../utils/routes.util';
import { AuthRoute } from './AuthRoute';
import { ErrorPage } from '../components';

export function Router() {
  const { authRoutes, notAuthRoutes } = getRoutes();

  return (
    <Routes>
      {notAuthRoutes.map((item) => (
        <Route key={item.page} path={item.route} element={<item.component />} />
      ))}
      {authRoutes.map((item) => (
        <Route
          key={item.page}
          path={item.route}
          element={
            <AuthRoute>
              <item.component />
            </AuthRoute>
          }
        />
      ))}
      <Route path="/error" element={<ErrorPage error="App Error" />} />
      <Route
        path="*"
        element={
          <ErrorPage error="Error 404. Please try to load another app route." />
        }
      />
    </Routes>
  );
}
