import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";

function App() {
  return (
    <div className="bg-pgray">
      <Navbar/>
      <Hero/>
      <Description/>
    </div>
  );
}

export default App;
