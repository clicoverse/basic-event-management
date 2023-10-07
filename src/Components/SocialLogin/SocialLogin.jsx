import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="m-5">
      <button className="btn font-bold mr-3 border-2 border-[#ae1ec7]">
        <FaGoogle></FaGoogle> Google
      </button>
      <button className="btn font-bold border-2 border-[#ae1ec7]">
        <FaFacebook></FaFacebook> FaceBook
      </button>
    </div>
  );
};

export default SocialLogin;
