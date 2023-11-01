import React from "react";
import Navbar from "./features/Navbar";
import Footer from "./features/Footer/Footer";
import Banner from "./features/Banner";
import Deals from "./features/Deals";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Deals/>
      <Footer />
    </>
  );
}

export default App;
