import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from 'src/views/app/home'
import Profile from 'src/views/app/profile'
import Auth from 'src/views/auth'
import AppLayout from 'src/components/AppLayout'
import Posts from 'src/views/app/posts'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
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
