import "./App.css";
import Home from "./pages/home/Components/Home";
import Training from "./pages/Training/Training";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScollToTop";
function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
