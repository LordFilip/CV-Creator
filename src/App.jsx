import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </Router>
  );
}

export default App;
