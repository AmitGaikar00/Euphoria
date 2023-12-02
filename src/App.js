import React from "react";
import Navbar from "./features/common/Navbar";
import Login from "./features/auth/Login";
import Signin from "./features/auth/Signin";

function App() {
  return (
    <>
      <Navbar />
      {/* <Banner />
      <Shop />
      <Footer /> */}
      <Login/>
      {/* <Signin/> */}
    </>
  );
}

export default App;
