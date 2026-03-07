import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to="/Login" replace />;
}

export default ProtectedRoute;
