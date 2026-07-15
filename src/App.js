import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
 
      <Home />
      <About />
      <Routes>
        <Route path="/about" element={<Home />} />
 
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;