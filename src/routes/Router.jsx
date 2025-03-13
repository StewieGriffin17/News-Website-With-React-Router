import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import NewsPage from "../pages/NewsPage";
import PrivateRoutes from "./PrivateRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoutes>
        <NewsPage></NewsPage>
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default Router;
