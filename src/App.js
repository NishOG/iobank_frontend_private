import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/dashboard/*',
      element: <Dashboard />
    }, 
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Register />
    }
  ]); // Added closing bracket and colon here
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
