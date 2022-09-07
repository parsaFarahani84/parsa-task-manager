import "./App.css";
import Hero from "./components/Hero/Hero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import AddRoutin from "./components/AddRoutin/AddRoutin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/manager" element={<Main />}></Route>
        <Route path="/add-routin" element={<AddRoutin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
