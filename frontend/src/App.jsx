import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

  import { Dashboard, Home, Login, Signup } from './routes'
  import { Header, Footer } from "./components"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/dashboard/*",
      element: <Dashboard />
    }
  ])

function App() {

  return (
    <div>
        <main>
            <RouterProvider router={router} />
        </main>
    </div>
  )
}

export default App
