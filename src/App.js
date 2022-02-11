import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivetRoute from "./Component/LogIn/PrivetRoute";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import DashBaord from "./Component/DashBaord/DashBaord";
import AuthProvider from "./Context/AuthProvider";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import MoreProducts from "./Component/MoreProducts/MoreProducts";
import Details from "./Component/Details/Details";
import Contact from "./Component/Contact/Contact";
import Blog from './Component/Blog/Blog'
import Login from "./Component/LogIn/Login";
import Resistation from "./Component/LogIn/Resistation";
import Footer from "./Component/Footer/Footer";
import NotFoundPage from "./Component/NotFoundPage/NotFoundPage";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/moreproducts">
          <MoreProducts />
        </Route>
        <PrivetRoute exact path="/details/:serviceId">
          <Details />
        </PrivetRoute>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/resister">
          <Resistation />
        </Route>
        <Route  path="/dashboard">
          <DashBaord />
        </Route>
        <Route exact path="/makeadmin">
          <MakeAdmin />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>
  </AuthProvider>
  );
}

export default App;
