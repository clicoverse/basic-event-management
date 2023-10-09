import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const textStyles = {
  fontFamily: "Kaushan Script",
  fontSize: "2rem",
  fontWeight: "bold",
};

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-[#ae1ec7] text-lg"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/packages"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-[#ae1ec7] text-lg"
            : ""
        }
      >
        Packages
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-[#ae1ec7] text-lg"
            : ""
        }
      >
        About Us
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold border-b-2 border-[#ae1ec7] text-lg"
            : ""
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="mx-auto  bg-[#6c2342] max-w-screen-2xl px-5 lg:px-10">
      <div className="navbar fill-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-neutral lg:hidden">
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
              className="menu menu-sm text-white font-semibold dropdown-content mt-3 z-[1] p-4 space-x-3 space-y-2 shadow bg-black rounded-box w-52"
            >
              {links}
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
          <ul className="menu text-white text-base font-semibold space-x-5 menu-horizontal">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar flex flex-wrap"
              >
                <div className="w-14 rounded-full">
                  <img src={user?.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Name:
                    <span className="badge">{user?.displayName}</span>
                  </a>
                </li>
                <li>
                  <a>
                    Email:
                    <span>{user?.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {user ? (
            <button
              onClick={() => handleLogOut()}
              className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce"
            >
              Sign Out
            </button>
          ) : (
            <NavLink to={"/login"}>
              <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                BOOK A TICKET
              </button>
            </NavLink>
          )}
        </div>
      </div>
      {/* Modal -1 (Login) */}
      {/* <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSingIn} className="card-body">
              <h2 className="text-center font-bold text-2xl">Please Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  type="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  type="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <div className="text-black flex justify-between items-center px-5 pb-10">
              <p className="text-bold font-bold">New Here? </p>
              <NavLink to={"/registration"}>
                <p>Create an Account</p>
              </NavLink>
            </div>
            <div className="text-center">
              <SocialLogin handleGoogleLogin={handleGoogleLogin}></SocialLogin>
            </div>
            <form method="dialog">
              <div className="text-end pr-5 pb-5">
                <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog> */}
      {/* Modal -2 (Register)
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body">
              <h2 className="text-center font-bold text-2xl">Please Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
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
                  name="password"
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
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-black flex justify-between items-center px-5 pb-10">
              <p className="text-bold font-bold">All Ready have Account? </p>
              <NavLink
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <p>Log in Please</p>
              </NavLink>
            </div>
            <div className="text-center">
              <SocialLogin handleGoogleLogin={handleGoogleLogin}></SocialLogin>
            </div>
            <form method="dialog">
              <div className="text-end pr-5 pb-5">
                <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog> */}
    </div>
  );
};

export default NavBar;
