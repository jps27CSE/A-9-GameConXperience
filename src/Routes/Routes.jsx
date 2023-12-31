import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import IndividualService from "../components/Home/Services/IndividualService/IndividualService";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Ticket from "../components/Ticket/Ticket";
import Profile from "../components/Profile/Profile";
import Information from "../components/Information/Information";
import ErrorPage from "../components/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <IndividualService />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/ticket/:id",
        element: (
          <PrivateRoute>
            <Ticket />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "/info",
        element: (
          <PrivateRoute>
            <Information />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
