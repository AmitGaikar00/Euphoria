import React from "react";

function Shop() {
  const images = [
    "joggers.svg",
    "sleeve.svg",
    "urban.svg",
    "active.svg",
    "savings3.svg",
  ];
  return (
    <section className="container mx-auto p-5 md:py-5 md:px-16">
      {/* Deals section */}
      <section className="flex flex-col md:flex-row gap-5 lg:gap-0 items-center justify-center py-10">
        <div className="w-full sm:w-3/4">
          <img className="cursor-pointer" src="Breezy.svg" alt="breezy" />
        </div>
        <div className="w-full sm:w-3/4">
          <img className="cursor-pointer" src="coziness.svg" alt="coziness" />
        </div>
      </section>

      {/* new arrivals */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            New Arrival
          </h1>
        </div>
        <div className="scrollbar overflow-x-auto flex items-center justify-start py-10 gap-5">
          {images.map((img, index) => (
            <img
              key={index}
              className="cursor-pointer object-contain w-1/2 sm:w-60 sm:h-60"
              src={img}
              alt="new arrivals"
            />
          ))}
        </div>
      </section>

      {/* savings zone */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            Big Saving Zone
          </h1>
        </div>
        {/* grid grid-cols-3 gap-2 */}
        <div className="grid grid-cols-3  gap-2 md:gap-5 py-2 pt-10">
          <div className="relative">
            <img className="w-full h-full" src="savings1.svg" alt="" />
            <button className="hidden md:block absolute left-3 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative ">
            <img className="w-full h-full" src="savings2.svg" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img className="w-full h-full" src="savings3.svg" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-5 py-2">
          <div className="relative">
            <img className=" w-full h-full" src="savings4.svg" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img className="w-full h-full" src="savings5.svg" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories for men */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            Categories For Men
          </h1>
        </div>
      </section>

      {/* Categories for women */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            Categories For Women{" "}
          </h1>
        </div>
      </section>
    </section>
  );
}

export default Shop;
