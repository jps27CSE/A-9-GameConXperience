import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import IndividualService from "../components/Home/Services/IndividualService/IndividualService";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: <IndividualService />,
      },
    ],
  },
]);
