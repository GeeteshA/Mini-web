import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/dashboard',
      element: <div><Navbar /><Dashboard />
      </div>
    }
  ]
)

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App