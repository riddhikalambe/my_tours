import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './NavbarComponent';
import HeroSection from './HeroSection';
import PackagesSections from './PackagesSections';
import TravelCard from './TravelCard';
import Register from './Register';
import LoginPage from './Login';
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <NavbarComponent />
      <HeroSection />
      <PackagesSections />
      <TravelCard />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setShowLogin={setShowLogin} />}
        />
        <Route
          path="/register"
          element={<Register setShowModal={setShowModal} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
