import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import NavContact from "./components/NavContact/NavContact";
import Believe from "./pages/Believe/Believe";
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Footer/Footer";
import Future from "./pages/Future/Future";
import Movement from "./pages/Movement/Movement";

function App() {
  return (
    <div className="App">
      <NavContact/>
      <Navbar/>
      <HeroSection/>
      <Future/>
      <Movement/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
