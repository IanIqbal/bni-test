import { createBrowserRouter } from "react-router-dom"
import BasicLayout from "../pages/BasicLayout"
import Dashboard from "../pages/Dashboard"
import CreateUser from "../pages/CreateUser"

const router = createBrowserRouter([{
    element: <BasicLayout></BasicLayout>,
    children: [
        {
            element:<Dashboard></Dashboard>,
            path:"/"
        },
        {
            element:<CreateUser></CreateUser>,
            path:"/userform"
        }
    ]
}])

export default router