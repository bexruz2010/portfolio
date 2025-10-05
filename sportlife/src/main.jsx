import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Sports from './pages/Sports.jsx'
import SportDetail from './pages/SportDetail.jsx'
import Blog from './pages/Blog.jsx'
import Media from './pages/Media.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sports', element: <Sports /> },
      { path: 'sports/:slug', element: <SportDetail /> },
      { path: 'blog', element: <Blog /> },
      { path: 'media', element: <Media /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
