import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Shop() {
  const new_arrival = [
    "arrival1.png",
    "arrival2.png",
    "arrival3.png",
    "arrival4.png",
  ];

  const menc = [
    "menc1.png",
    "menc2.png",
    "menc3.png",
    "menc4.png",
    "menc5.png",
    "menc6.png",
    "menc7.png",
    "menc8.png",
  ];
  const womenc = ["womc1.png", "womc2.png", "womc3.png", "womc4.png"];
  const limelight = ["lime1.png", "lime2.png", "lime3.png", "lime4.png"];

  const brands = [
    "brand1.png",
    "brand2.png",
    "brand3.png",
    "brand4.png",
    "brand5.png",
  ];

  const savings = [
    "savings1.png",
    "savings2.png",
    "savings3.png",
    "savings4.png",
    "savings5.png",
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
          {new_arrival.map((img, index) => (
            <div className="flex flex-col gap-4">
              <img
                key={index}
                className="cursor-pointer"
                src={`images/${img}`}
                alt="new arrivals"
              />
              <h3 className="font-semibold text-base">Black Shorts</h3>
            </div>
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
            <img className="w-full h-full" src="images/savings1.png" alt="" />
            <button className="hidden md:block absolute left-3 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative ">
            <img className="w-full h-full" src="images/savings2.png" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img className="w-full h-full" src="images/savings3.png" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-5 py-2">
          <div className="relative">
            <img className=" w-full h-full" src="images/savings4.png" alt="" />
            <button className="hidden md:block absolute right-12 top-3/4 -translate-y-3/4 text-white text-base px-8 py-2 rounded-lg shadow-sm bg-inherit border-white border-2 font-bold hover:bg-white hover:text-black transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img className="w-full h-full" src="images/savings5.png" alt="" />
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

        <div className="grid grid-cols-5 gap-5 items-center py-10">
          {menc.map((img, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img className="" src={`images/${img}`} alt="men_category" />
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="font-semibold text-base">Shirts</h3>
                  <p className="font-light text-xs">explore now</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 " />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories for women */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            Categories For Women
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-5 items-center py-10">
          {womenc.map((img, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img className="" src={`images/${img}`} alt="men_category" />
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="font-semibold text-base">Shirts</h3>
                  <p className="font-light text-xs">explore now</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 " />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* brands section */}
      <section className="py-10 bg-dark-hard flex items-center justify-center flex-col gap-5 text-white rounded-lg">
        <h1 className="font-bold text-4xl">Top Brands Deal</h1>
        <p className="text-xl">
          Up To <span className="text-yellow-300">60%</span> off on brands
        </p>
        <div className="flex gap-5 items-center py-6">
          {brands.map((brand) => (
            <img src={`images/${brand}`} alt="brand" />
          ))}
        </div>
      </section>

      {/* lime light women section */}
      <section className="py-10">
        <div className="heading flex gap-4">
          <span className="border-l-8 border-primary-purple"></span>
          <h1 className=" text-dark-hard text-xl md:text-2xl font-bold">
            In The Limelight
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-5 items-center py-10">
          {limelight.map((img, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img className="" src={`images/${img}`} alt="limelight" />
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="font-semibold text-base">Black Shorts</h3>
                  <p className="font-light text-xs">MM's Brand</p>
                </div>
                <button className="flex font-bold px-4 py-2 bg-dark-light rounded-lg cursor-pointer hover:bg-slate-200 transition-all duration-200">
                  <span>$</span>
                  <p>123.00</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Shop;
