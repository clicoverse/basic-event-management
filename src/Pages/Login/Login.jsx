import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import ClientsFeedBack from "../../Components/ClientsFeedBack/ClientsFeedBack";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.email.value;
    // console.log(email);
    signInUser(email, password)
      .then((response) => {
        response.user;
        //toast
        toast.success("You have successfully Logged in");
        navigation(location?.state ? location.state : "/");
      })
      .catch((error) => {
        error.message;
        //toast
        toast.error("Sorry!! your Log-in Failed");
      });
  };

  return (
    <div className="mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl px-5 lg:px-10">
      <div>
        <ClientsFeedBack></ClientsFeedBack>
      </div>
      <div className="">
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
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
