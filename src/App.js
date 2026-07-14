import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
 
      <Home />
      <Routes>
        <Route path="/about" element={<Home />} />
 
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;