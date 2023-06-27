import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Docs from "./components/docs";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
