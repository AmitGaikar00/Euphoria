import React from "react";
import Navbar from "./features/Navbar";
import Footer from "./features/Footer/Footer";
import Banner from "./features/Banner";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Shop/>
      <Footer />
    </>
  );
}

export default App;
