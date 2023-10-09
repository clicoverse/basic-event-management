import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
