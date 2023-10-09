import './App.css'
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (
    <Layout>
      <RouterProvider> router={router}</RouterProvider>
    </Layout>
  );
}