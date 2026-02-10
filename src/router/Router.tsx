import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const Home = lazy(() => import("@/pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
  {
    path: "*",
    element: <Home />,
  },
]);
