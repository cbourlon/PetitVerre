import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./pages/Frontpage.jsx";
import Beerpage from "./pages/Beerpage.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Header from "./components/Header.jsx";

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
          <Route path="/beers">
            <Beerpage />
          </Route>
          <Route path="/contact">
            <Contactpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
