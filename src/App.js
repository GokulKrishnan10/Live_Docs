import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Creation from "./components/creation";
function App() {
  return (
    <div className="App">
      <Header />
      <h3>Start a new Document</h3>
      <Creation />
    </div>
  );
}

export default App;
