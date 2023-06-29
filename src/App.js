import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Docs from "./components/docs";
import Signupform from "./components/signupform";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/docs" element={<Docs />} />
        <Route exact path="/signup" element={<Signupform />} />
      </Routes>
    </Router>
  );
}

export default App;
