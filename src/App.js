import bookstack from "./bookstack.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={bookstack} className="Dictionary-logo" alt="logo" />

          <div className="dictionary-name">
            <strong>Dictionary App</strong>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/parcellj92/Dictionary-REACT-app">
              Open-source code
            </a>{" "}
            by Jessica Parcell
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
