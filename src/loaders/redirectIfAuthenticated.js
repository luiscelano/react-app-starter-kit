import { redirect } from 'react-router-dom';

function redirectIfAuthenticated() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('redirect if authenticated', isAuthenticated);

  if (!isAuthenticated) return redirect('/auth');

  return null;
}

export default redirectIfAuthenticated;
