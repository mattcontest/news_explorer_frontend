import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, onRequiredAuth, authLoading, children }) {
  const location = useLocation();
  //   const requestedRef = useRef(false);

  useEffect(() => {
    // if (!isLoggedIn && !requestedRef.current) {
    if (!isLoggedIn) {
      //   requestedRef.current = true;
      // if (onRequiredAuth && !authLoading) {
      if (onRequiredAuth) {
        onRequiredAuth();
      }
    }
  }, [isLoggedIn, authLoading, isLoggedIn]);

  if (authLoading) {
    return null;
  }
  if (!isLoggedIn) {
    alert("Unauthorized, you are being redirected to the Home");
    return <Navigate to="/" replace={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
