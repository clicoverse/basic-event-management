import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

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
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
