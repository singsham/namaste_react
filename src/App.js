import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About/";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Instamart = lazy(() => import("./components/Instamart"));
const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrimeReactProvider>
        <AppContainer />
      </PrimeReactProvider>
    ),

    children: [
      { path: "/", element: <Body /> },
      { path: "/home", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/restaurants/:id", element: <RestaurantMenu /> },
    ],
    // errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
