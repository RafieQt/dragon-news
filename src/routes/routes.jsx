import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element: <Home></Home>
      },
      {
        path: "category/:id",
        element:<CategoryNews></CategoryNews>,
        loader: ()=> fetch('/news.json'),
      }
    ]
  },
  {
    path: "/about",
    element: <h3>About</h3>,
  },
  {
    path: "/career",
    element: <h3>Career</h3>
  }
]);
