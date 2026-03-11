import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Info from './pages/info'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/info/:id",
        element: <Info />
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App