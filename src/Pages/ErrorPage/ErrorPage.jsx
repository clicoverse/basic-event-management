import { NavLink } from "react-router-dom";
import errorPage1 from "../../assets/404main.jpg";
import errorPage2 from "../../assets/board.png";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-auto text-white max-w-screen-2xl px-5 lg:px-10">
        <div className="flex justify-center items-center h-[60vh] overflow-hidden">
          <img
            src={errorPage1}
            alt=""
            className="flex justify-center items-center w-[475px]"
          />
          <img
            src={errorPage2}
            alt=""
            className="w-[175px] sm:hidden md:hidden"
          />
        </div>
        <div className="text-center text-black">
          <h1 className="font-bold text-xl">PAGE NOT FOUND</h1>
          <p>
            {" "}
            The Page you are looking for is not avialable
            <br />
            or temparorily unavailable.
          </p>
          <div className="mt-10">
            <NavLink
              to={"/"}
              className="border-none px-5 py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer"
            >
              <i className="fa-solid fa-house-chimney"></i>GO TO HOMEPAGE
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage;
