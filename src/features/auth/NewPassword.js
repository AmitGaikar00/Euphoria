import React from "react";
import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <section className="container mx-auto w-screen bg-white flex">
      {/* image */}
      <img
        src="images/newPassword.png"
        className="hidden xl:block h-screen w-1/2 object-cover origin-top-right"
        alt="login"
      />
      {/* login form */}
      <div className="max-w-2xl flex flex-col mx-auto px-20 pt-5 w-full lg:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-gray-900 py-3">Create New Password</h2>

        <form className="flex flex-col">
          {/* password  */}
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="Password"
              className="text-[#5a7184] font-semibold block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter New Password"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border focus:ring-0"
            />
          </div>

          {/* confirm password  */}
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="confirmPassword"
              className="text-[#5a7184] font-semibold block"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="confirm Your Password"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-purple text-white font-bold text-lg py-3 px-16 rounded-lg max-w-fit mt-5"
          >
            Reset Password
          </button>
          
        </form>
      </div>
    </section>
  );
}

export default NewPassword;
