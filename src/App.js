import bookstack from "./bookstack.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={bookstack} className="Dictionary-logo" alt="logo" />
      <div className="dictionary-name">
        <strong>Dictionary App</strong>
      </div>
    </div>
  );
}

export default App;
