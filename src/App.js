import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from 'react-router-dom';
import Home from "./components/Home";


function App() {

  return (
    <>
        <Router>
          <Switch>
            {/* <Route exact path="/video/:url" component={Home}/> */}
            {/* <Route exact path="/search" component={Search}/> */}
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
    </>
  );
}

export default App;
