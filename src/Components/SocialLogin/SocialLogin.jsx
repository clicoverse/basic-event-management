import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googelLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googelLogin()
      .then((response) => response.user)
      .catch((error) => error.message);
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
