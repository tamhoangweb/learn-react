import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tam Hoang</p>
        <TodoFeature />
        <AlbumFeature />
      </header>
    </div>
  );
}

export default App;
