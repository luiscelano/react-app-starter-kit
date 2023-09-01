import { redirect } from 'react-router-dom';

function redirectIfAuthenticated() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (!isAuthenticated) return redirect('/auth');

  return null;
}

export default redirectIfAuthenticated;
