import React from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
// import Login from "./auth/RPAScreen/Login";
// import ForgotPassword from "./auth/RPAScreen/ForgotPassword";
// import DashBoard from "./Pages/RPAScreen/MainDashboard";
import DashBoard from "./Pages/CustomerScreen/MainDashboard";
// import Funds from "./Pages/RPAScreen/Funds";
import PrintPage from "./Pages/CustomerScreen/PrintPage";
// import PrintPageSecond from "./Pages/RPAScreen/PrintPageSecond";
import Login from "./auth/CustomerScreen/Login";
import ForgotPassword from "./auth/CustomerScreen/ForgotPassword";
import SignUp from "./auth/CustomerScreen/SignUp";
import ProtectedRoute from "./shared/ProtectedRoute";
import PrivateRoute from "./shared/PrivateRoute";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/cs/signup" component={SignUp} />
      <PrivateRoute exact path="/customer/login" component={Login} />
      <ProtectedRoute exact path="/trans/:id" component={PrintPage} />
      <ProtectedRoute path="/customer" component={DashBoard} />
      <PrivateRoute
        exact
        path={`/customer/forgot`}
        component={ForgotPassword}
      />

      {/* <PrivateRoute exact path={`/login`} component={Login} /> */}
      {/* <PrivateRoute exact path={`/forgot`} component={ForgotPassword} />
      <ProtectedRoute path="/home" component={DashBoard} />
      <Route exact path="/funds" component={Funds} /> */}

      {/* <Route exact path="/print2" component={PrintPageSecond} /> */}
      <Route exact path="/">
        <Redirect to={`/customer`} />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );

  return (
    <Container fluid>
      <Row>{routes}</Row>
    </Container>
  );
}

export default App;
