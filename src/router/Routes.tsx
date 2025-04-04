import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Products from "../pages/Products/Products";

const Routes: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/products",
            element: <Products />,
        },
        // {
        //     path: "/cart",
        //     element: <Cart />,
        // },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
