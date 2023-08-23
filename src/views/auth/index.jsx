import React from 'react';
import { Navigate } from 'react-router-dom';

function Auth() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if(isAuthenticated) return <Navigate to={'/app'} />

  return <div>auth screen</div>;
}

export default Auth;
