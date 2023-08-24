import { createBrowserRouter, redirect } from 'react-router-dom';
import redirectIfAuthenticated from './loaders/redirectIfAuthenticated';
import Home from './views/app/home';
import Profile from './views/app/profile';
import Auth from './views/auth';
import AppLayout from './components/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/app'),
  },
  {
    path: '/app',
    Component: AppLayout,
    loader: redirectIfAuthenticated,
    children: [
      {
        path: '',
        loader: () => redirect('home'),
      },
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'profile',
        Component: Profile,
      },
    ],
  },
  { path: '/auth', Component: Auth },
]);

export default routes;
