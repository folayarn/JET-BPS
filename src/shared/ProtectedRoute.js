import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const us = JSON.parse(sessionStorage.getItem("xys"));
  const isLoggedIn = us ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: "/customer/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
