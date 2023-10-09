import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex h-screen text-[#ff006a]">
        <div className="m-auto">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRouter;
