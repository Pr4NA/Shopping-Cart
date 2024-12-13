import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./Cart";
import ActualCart from "./ActualCart";
import { DataProvider } from "./DataContext";

const ErrorPage = () => (
  <div>
    <h1>Oops!</h1>
    <p>The page you are looking for doesn't exist or an error occurred.</p>
    <a href="/">Go to Home</a>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Define error page
  },
  {
    path: "cart",
    element: <ShoppingCart />,
    errorElement: <ErrorPage />, // Define error page
  },
  {
    path: "actual-cart",
    element: <ActualCart />,
    errorElement: <ErrorPage />, // Define error page
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
