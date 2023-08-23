import { createBrowserRouter, redirect } from 'react-router-dom';
import redirectIfAuthenticated from './loaders/redirectIfAuthenticated';
import Screen1 from './views/app/screen1';
import Screen2 from './views/app/screen2';
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
        loader: () => redirect('screen1'),
      },
      {
        path: 'screen1',
        Component: Screen1,
      },
      {
        path: 'screen2',
        Component: Screen2,
      },
    ],
  },
  { path: '/auth', Component: Auth },
]);

export default routes;
