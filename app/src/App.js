import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./Header";
import Main from "./Main";

function App() {
  const productList = useSelector((state) => state.productList);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
