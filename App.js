import "./App.css";
import Home from "./home/Home";
import Picks from "./picks/Picks";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/picks">Picks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picks" element={<Picks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
