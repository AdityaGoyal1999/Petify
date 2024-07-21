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
      path: "/dashboard",
      element: <Dashboard />
    }
  ])

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <RouterProvider router={router} />
        </main>
        <Footer />
    </div>
  )
}

export default App
