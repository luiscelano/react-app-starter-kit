import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewsApp from './app';
import Auth from './auth';

function Views() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated)
    return (
      <>
        <Navigate to={'/app'} />
        <Routes>
          <Route path="/app" element={<ViewsApp />} />
        </Routes>
      </>
    );

  return (
    <>
      <Navigate to={'/auth'} />
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default Views;
