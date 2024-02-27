

import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
export const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoute />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
        ]
    }
])