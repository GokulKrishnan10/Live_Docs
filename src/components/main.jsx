import Header from "./header";
import Creation from "./creation";
import "./css/main.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Main() {
  const value = useSelector((state) => state.value);
  const b = true;
  return (
    <div className="App">
      <Header />
      <Creation />
    </div>
  );
}
