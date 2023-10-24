import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Docs from "./components/docs";
import Signupform from "./components/signupform";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import { Login } from "./components/login";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/docs" element={<Docs />} />
          <Route exact path="/signup" element={<Signupform />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
