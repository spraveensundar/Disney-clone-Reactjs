import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from "./component/Login";
import Headers from "./component/Header";
import Home from "./component/Home";
import Detail from "./component/Detail";

function App() {
  return (
    <Router>
      <Headers/>
      <Switch>

        <Route exact path="/">
            <Login/>
        </Route>

        <Route path="/home">
          <Home/>  
        </Route>
        <Route path="/detail/:id">
          <Detail/>  
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
