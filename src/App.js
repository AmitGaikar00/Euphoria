import React from "react";
import Navbar from "./features/common/Navbar";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import ForgotPassword from "./features/auth/ForgotPassword";
import Verification from "./features/auth/Verification";
import NewPassword from "./features/auth/NewPassword";
import Men from "./features/Men/Men";

function App() {
  return (
    <>
      <Navbar />
      {/* <Banner />
      <Shop />
      <Footer /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ForgotPassword /> */}
      {/* <Verification/> */}
      {/* <NewPassword/> */}
      <Men/>
    </>
  );
}

export default App;
