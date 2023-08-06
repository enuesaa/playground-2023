import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello Woarld</h1>
        <Link to="/about">About Us</Link>
      </div>
    ),
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
