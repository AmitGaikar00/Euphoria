import React from "react";

function Login() {
  return (
    <section className="mx-auto w-full bg-white flex">
      {/* image */}
      <img
        src="images/signin.png"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
        alt="login"
      />
      {/* form */}
      <div className="flex p-10 w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">Sign In Page</h2>
        
      </div>
    </section>
  );
}

export default Login;
