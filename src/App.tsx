import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Cisternas from "./pages/Produtos/Cisternas";
import Caminhoes from "./pages/Produtos/Caminhoes";
import Sistemas from "./pages/Produtos/Sistemas";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos/cisternas",
        element: <Cisternas />
      },
      {
        path: "/produtos/caminhoes",
        element: <Caminhoes />,
      },
      {
        path: "/produtos/sistemas-de-captação-de-chuva",
        element: <Sistemas />,
      }
    ]
  }
])