import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./views/Login"
import Register from "./views/Register"
import { App as AntdApp } from "antd"
import Dashboard from "./views/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Login
    },
    {
      path: "/register",
      Component: Register
    },
    {
      path: "/dashboard",
      element: <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    }
  ])
  return (
    <AntdApp>
      <RouterProvider router={router} />
    </AntdApp>
  )
}

export default App