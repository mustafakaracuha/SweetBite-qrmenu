import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import QRScanner from './pages/Scanner/QRScanner';
import QRMenu from './pages/Menu/QRMenu';
import './index.css';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <QRScanner/>,
  // },
  {
    path: "/",
    element: <QRMenu/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
