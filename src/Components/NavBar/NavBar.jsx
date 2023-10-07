import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const textStyles = {
  fontFamily: "Kaushan Script",
  fontSize: "2rem",
  fontWeight: "bold",
};

<NavLink to={"/"}>Home</NavLink>;

const NavBar = () => {
  return (
    <div className="mx-auto  bg-[#6c2342] max-w-screen-2xl px-5 lg:px-10">
      <div className="navbar fill-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <img className="h-12 w-12" src={logo} alt="logo" />
            <div>
              <NavLink to={"/"}>
                <h2 className="text-3xl font-semibold">
                  <span style={textStyles} className="text-white">
                    ClicoVerse
                  </span>
                </h2>
                <p className="text-md font-medium text-white">
                  PhotoShoot Event
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce"
          >
            BOOK A TICKET
          </a>
        </div>
      </div>
      {/* Modal -1 (Login) */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body">
              <h2 className="text-center font-bold text-2xl">Please Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                  LOGIN
                </button>
              </div>
            </form>
            <div className="text-black flex justify-between items-center px-5 pb-10">
              <p className="text-bold font-bold">New Here? </p>
              <NavLink
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <p>Create an Account</p>
              </NavLink>
            </div>
            <div className="text-center pt-5 border-t-2 border-[#ae1ec7]">
              <SocialLogin></SocialLogin>
            </div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="text-end pr-5 pb-5">
                <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NavBar;
