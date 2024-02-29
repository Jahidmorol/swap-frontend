import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <App />,
      },
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
    ],
  },
]);
