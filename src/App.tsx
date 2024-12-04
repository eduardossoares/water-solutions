import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Empresa from "./pages/Empresa";
import Produtos from "./pages/Produtos";
import Cisternas from "./pages/Produtos/Cisternas";
import Caminhoes from "./pages/Produtos/Caminhao";
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
        path: "/empresa",
        element: <Empresa />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/cisternas",
        element: <Cisternas />
      },
      {
        path: "/produtos/caminhoes",
        element: <Caminhoes />
      },
      {
        path: "/produtos/sistemas",
        element: <Sistemas />
      }
    ]
  }
])