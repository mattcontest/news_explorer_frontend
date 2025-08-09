import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, onRequiredAuth, children }) {
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      if (onRequiredAuth) {
        onRequiredAuth();
      }
    }
  }, [isLoggedIn, onRequiredAuth]);

  if (!isLoggedIn) {
    alert("Unauthorized, you are being redirected to the Home");
    return <Navigate to="/" replace={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
