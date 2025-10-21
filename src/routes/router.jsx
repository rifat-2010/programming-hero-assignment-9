import { createBrowserRouter } from "react-router";


import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:'/about-us',
       element: <AboutUs></AboutUs>,
      },
      {
        path: '/profile',
       element: <Profile></Profile>
      },
      {
        path: '/profile',
       element: <Profile></Profile>
      },
    ],
  },
]);
