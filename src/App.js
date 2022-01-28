import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import MoreProducts from './Component/MoreProducts/MoreProducts';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';
import Details from './Component/Details/Details';
import Login from './Component/LogIn/Login';
import Resistation from './Component/LogIn/Resistation';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './Component/LogIn/PrivetRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/moreproducts">
          <MoreProducts/>
          </Route>
          <PrivetRoute exact path="/details/:serviceId">
            <Details/>
          </PrivetRoute>
          <Route exact path="/contact">
          <Contact/>
          </Route>
          <Route exact path="/blog">
          <Blog/>
          </Route>
          <Route exact path="/login">
          <Login/>
          </Route>
          <Route exact path="/resister">
          <Resistation/>
          </Route>
          <Route exact path="*">
          <NotFoundPage/>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
