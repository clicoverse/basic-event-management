import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googelLogin } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleGoogleLogin = () => {
    googelLogin()
      .then((response) => {
        response.user;
        //toast
        toast.success("You have successfully Logged in");
        navigation("/");
      })
      .catch((error) => {
        error.message;
        //toast
        toast.error("Sorry!! your Log-in Failed");
      });
  };
  return (
    <div className="m-5 space-y-3">
      <div className="divider font-bold text-lg">Continue with</div>
      <div>
        <button
          onClick={() => handleGoogleLogin()}
          className="btn font-bold mr-3 border-2 border-[#ae1ec7]"
        >
          <FaGoogle></FaGoogle> Google
        </button>
        <button className="btn font-bold border-2 border-[#ae1ec7]">
          <FaFacebook></FaFacebook> FaceBook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
