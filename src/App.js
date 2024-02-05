import "./style/style.css"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Devices from "./pages/devices";

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route exact path="/" element={<Devices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


