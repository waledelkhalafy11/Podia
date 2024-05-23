import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Products from "./components/Products";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-pgray">
      <Navbar/>
      <Hero/>
      <Description/>
      <Products/>
      <Banner/>
    </div>
  );
}

export default App;
