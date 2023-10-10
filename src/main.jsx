import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import QRScanner from "./pages/Scanner/QRScanner";
import QrMenu from "./pages/Menu/QRMenu";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QRScanner/>,
  },
  {
    path: "/menu",
    element: <QrMenu/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);