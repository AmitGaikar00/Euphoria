import React from "react";

function Banner() {
  return (
    <section className="w-full h-screen relative bg-[#01b7dc] md:bg-white">
      <img
        src="hero.svg"
        className="w-full h-screen object-cover object-top hidden md:block"
        alt="hero"
      />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/3 -translate-x-1/4 text-white flex flex-col justify-between gap-7">
        <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">T-Shirt/ Tops</h2>
        <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl max-w-sm">
          Summer Value Pack
        </h1>
        <h2 className="font-semibold text-2xl xl:text-3xl ">cool / colourful / comfy</h2>
        <div>
          <button className="text-black text-base px-12 py-2 rounded-lg shadow-sm bg-white border-none font-bold hover:bg-dark-light transition-all duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
