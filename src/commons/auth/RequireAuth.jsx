import React from "react";
import { useAuth } from ".";
import { Navigate, useLocation } from "react-router";

function RequireAuth({ permissionNeeded, children }) {
  const { permissions, isAuthenticated } = useAuth();
  const location = useLocation();

  // user is not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // user doesn't have any permission
  if (isAuthenticated && !permissions) {
    console.log("there")

    return <Navigate to="/unauthorized" />;
  }

  // user doesn't have permission needed
  if (
    !permissions.includes(permissionNeeded) &&
    !permissions.includes("administrator")
  ) {
    console.log("here")
    console.log(permissions.includes(permissionNeeded))
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default RequireAuth;
