import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/global.css'
import TopPage from '@/pages/index'
import FramePage from '@/pages/frame'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/frame',
    element: <FramePage />,
  },
])

export const App = () => {
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    </>
  )
}
