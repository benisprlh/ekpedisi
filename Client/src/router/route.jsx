import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/home";
import Update from "../pages/update";
import Create from "../pages/create";
import Report from "../pages/report";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
]);

export default router;
