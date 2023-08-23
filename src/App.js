import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Views from './views';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Views,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
