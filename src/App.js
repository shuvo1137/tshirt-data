import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ReviewOrder from "./Components/ReviewOrder/ReviewOrder";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<ReviewOrder></ReviewOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
