import { createBrowserRouter } from "react-router";


import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("/data.json"),
      },
      {
        path:'/about-us',
       element: <AboutUs></AboutUs>,
      },
      {
        path: '/profile',
       element: <Profile></Profile>,
      },
      {
        path: '/signIn-page',
       element: <SignIn></SignIn>,
      },
      {
        path: '/signUp-page',
       element: <SignUp></SignUp>,
      },
    ],
  },
]);
