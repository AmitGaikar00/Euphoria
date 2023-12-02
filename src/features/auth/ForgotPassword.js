import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="container mx-auto w-screen bg-white flex">
      {/* image */}
      <img
        src="images/resetpassword.png"
        className="hidden xl:block h-screen  w-1/2 object-cover origin-top-right"
        alt="login"
      />
      {/* login form */}
      <div className="max-w-2xl flex flex-col mx-auto px-20 pt-5 w-full lg:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-gray-900 py-3">Reset Your Password</h2>

        <form className="flex flex-col">
          {/* name  */}
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="email"
              className="text-[#5a7184] font-semibold block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-purple text-white font-bold text-lg py-3 px-16 rounded-lg max-w-fit mt-5"
          >
            Send
          </button>
          <p className="text-sm font-semibold text-[#5a7184] mt-3">
            Back to{" "}
            <Link
              to="/signup"
              className="text-primary-purple text-sm font-semibold hover:text-dark-hard underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
