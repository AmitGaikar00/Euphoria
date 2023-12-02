import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="container mx-auto w-full bg-white flex">
      {/* image */}
      <img
        src="images/signup.png"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
        alt="login"
      />
      {/* login form */}
      <div className="max-w-xl flex flex-col mx-auto px-20 pt-5 w-full xl:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-gray-900 py-3">Sign Up Page</h2>

        {/* auth buttons */}
        <div className="flex flex-col items-center space-y-5">
          <button className="w-full bg-white text-primary-purple rounded-lg font-semibold text-base border border-dark-hard flex justify-center items-center gap-2 py-3">
            <img src="images/google.png " alt="" />
            Continue With Google{" "}
          </button>
          <button className="w-full bg-white text-primary-purple rounded-lg font-semibold text-base border border-dark-hard  flex justify-center items-center gap-2 py-3">
            <img src="images/Twitter.png " alt="" />
            Continue With Twitter{" "}
          </button>
        </div>

        <form className="py-5">
          {/* name  */}
          <div className="flex flex-col mt-6 w-full">
            <label
              htmlFor="email"
              className="text-[#5a7184] font-semibold block"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border focus:ring-0"
            />
          </div>

          {/* password */}
          <div className="flex flex-col mt-6 w-full">
            <label
              htmlFor="password"
              className="text-[#5a7184] font-semibold block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border focus:ring-0"
            />
          </div>

          <div className="flex flex-col mt-10 gap-3 ">
            <button
              type="submit"
              className="bg-primary-purple text-white font-bold text-lg py-3 px-16 rounded-lg max-w-fit"
            >
              Sign Up
            </button>
            <p className="text-sm font-semibold text-[#5a7184] pb-10">
              Already have an account?{" "}
              <Link
                to="/signup"
                className="text-primary-purple text-sm font-semibold hover:text-dark-hard underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
