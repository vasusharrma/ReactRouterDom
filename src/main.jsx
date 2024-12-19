import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element : <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element: <User/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
