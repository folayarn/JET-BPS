import React from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./auth/RPAScreen/Login";
import ForgotPassword from "./auth/RPAScreen/ForgotPassword";
import DashBoard from "./Pages/RPAScreen/MainDashboard";
import Funds from "./Pages/RPAScreen/Funds";
import PrintPage from "./Pages/RPAScreen/PrintPage";
import PrintPageSecond from "./Pages/RPAScreen/PrintPageSecond";
import { generateNumber } from "./shared/utility";
import CustomerSignUp from "./auth/CustomerScreen/SignUp";

function App() {
  console.log(generateNumber(15));
  const routes = (
    <Switch>
      <Route path="/cs/signup" component={CustomerSignUp} />
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/forgot`} component={ForgotPassword} />
      <Route path="/home" component={DashBoard} />
      <Route exact path="/funds" component={Funds} />
      <Route exact path="/print" component={PrintPage} />
      <Route exact path="/print2" component={PrintPageSecond} />
      <Route exact path="/">
        <Redirect to={`/home`} />
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
