import "./App.css";

import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tam Hoang</p>
        <div>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <div>
          <NavLink to="/albums">Albums</NavLink>
        </div>
        <Switch>
          <Redirect from="/home" to="/" exact />
          <Redirect from="/post-list/:postId" to="/posts/:postId" />

          <Route path="/" exact component={TodoFeature} />
          <Route path="/todos" component={TodoFeature} />
          <Route path="/albums" component={AlbumFeature} />
          <Route component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
