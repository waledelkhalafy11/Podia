import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Products from "./components/Products";

function App() {
  return (
    <div className="bg-pgray">
      <Navbar/>
      <Hero/>
      <Description/>
      <Products/>
    </div>
  );
}

export default App;
