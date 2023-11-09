import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
import Register from './Register/Register';
import AddBlog from "./AddBlog/AddBlog";
import PrivateRoute from "./PriveteRoute/PrivateRoute";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import WishList from "../Pages/WishList/WishList";
  
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
        },
        {
          path: "/allBlogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "blogDetails/:id",
          element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-0006-server.vercel.app/blogdetails/${params.id}`)
        },
        {
          path: "/wishList",
          element: <PrivateRoute><WishList></WishList></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/wishlist')
        }

      ]
    },
  ]);

  export default router;