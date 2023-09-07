import { createBrowserRouter, redirect } from 'react-router-dom'
import redirectIfAuthenticated from './loaders/redirectIfAuthenticated'
import Home from './views/app/Home'
import Profile from './views/app/Profile'
import Auth from './views/auth'
import AppLayout from './components/Layout'
import Posts from './views/app/Posts'

const routes = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/app')
  },
  {
    path: '/app',
    Component: AppLayout,
    loader: redirectIfAuthenticated,
    children: [
      {
        path: '',
        loader: () => redirect('home')
      },
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'posts',
        Component: Posts
      }
    ]
  },
  { path: '/auth', Component: Auth }
])

export default routes
