import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Packages from "../Pages/Packages/Packages";
import Service from "../Pages/Service/Service";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Hire from "../Pages/Hire/Hire";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: (
          <PrivateRouter>
            <Packages></Packages>
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRouter>
            <Service></Service>
          </PrivateRouter>
        ),
        loader: () => fetch("../../services.json"),
      },
      {
        path: "/hire",
        element: (
          <PrivateRouter>
            <Hire></Hire>
          </PrivateRouter>
        ),
        loader: () => fetch("../../hire.json"),
      },
    ],
  },
]);

export default MainRouter;
