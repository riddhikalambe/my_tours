import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./NavbarComponent";
import HeroSection from "./HeroSection";
import PackagesSections from "./PackagesSections"; 
import TravelCard from "./TravelCard";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeroSection />
      <PackagesSections />
      <TravelCard />
      <Routes>  
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
