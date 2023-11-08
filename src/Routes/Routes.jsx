import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
import Register from './Register/Register';
import AddBlog from "./AddBlog/AddBlog";
import PrivateRoute from "./PriveteRoute/PrivateRoute";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path:"/addBlog",
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        }

      ]
    },
  ]);

  export default router;