import { createBrowserRouter } from "react-router";


import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ToyDetailsPage from "../pages/ToyDetailsPage";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPassWordPage from "../pages/ForgetPassWordPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("/data.json"),
      },
      {
        path:'/about-us',
       element: <AboutUs/>,
      },
      {
        path: '/blog-page',
       element: <BlogPage/>,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/profile-page',
        element: <PrivateRoute><Profile/></PrivateRoute>,
      },
      {
        path: '/signIn-page',
       element: <SignIn/>,
      },
      {
        path: '/signUp-page',
       element: <SignUp/>,
      },
      {
        path: '/Forget-password-Page',
       element: <ForgetPassWordPage/>,
      },
      {
      path: '/toy-Details-page/:id',
       element: <PrivateRoute><ToyDetailsPage/></PrivateRoute> ,
       loader: () => fetch("/data.json"),
      },
    ],
  },
]);
