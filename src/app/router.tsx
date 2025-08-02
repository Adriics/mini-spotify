import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import PlayerPage from "./modules/user/pages/PlayerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/player",
    element: <PlayerPage />,
  },
]);
