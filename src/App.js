import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import Plan from "./components/Plan";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar />  
    <Hero />
    <Offers />    
    <Plan />
    <Rooms />
    <ImageSlider />
    <Footer />

    </>
  );
}

export default App;
