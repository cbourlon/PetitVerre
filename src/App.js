import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./pages/Frontpage.jsx";
import Productpage from "./pages/Productpage.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Header from "./components/Header.jsx";
import Beertasting from "./pages/Beertasting.jsx";
import AllProducts from "./components/ProductpageComponents/AllProducts.jsx";
import Beers from "./components/ProductpageComponents/Beers.jsx";
import Goodies from "./components/ProductpageComponents/Goodies.jsx";
import TastingBox from "./components/ProductpageComponents/TastingBox.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>

          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="/products">
            <Productpage />
          </Route>
          <Route path="/beertasting">
            <Beertasting />
          </Route>
          <Route path="/contact">
            <Contactpage />
          </Route>

          <Route path="/allproducts">
            <AllProducts />
          </Route>

          <Route path="/beerproducts">
            <Beers />
          </Route>

          <Route path="/goodieproducts">
            <Goodies />
          </Route>

          <Route path="/tastingboxproducts">
            <TastingBox />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
