import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import {
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [navIsVisible, setNavIsVisible] = useState(true);
  const navItemsInfo = [
    { name: "Shop", type: "link", href: "/" },
    { name: "Men", type: "link", href: "/" },
    { name: "Women", type: "link", href: "/" },
    { name: "Combos", type: "link", href: "/" },
    { name: "Joggers", type: "link", href: "/" },
  ];
  return (
    <section className="container mx-auto w-full bg-white">
      {/* desktop view */}
      <header className="flex justify-between items-center p-5">
        <img
          src="Euphoria.svg"
          className="w-18 cursor-pointer hidden lg:block"
          alt="logo"
        />

        <div className="lg:hidden z-50 order-first flex gap-5 items-center p-2">
          <img
            src="Euphoria.svg"
            className="w-17 cursor-pointer order-last"
            alt="logo"
          />
          {navIsVisible ? (
            <Bars3Icon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setNavIsVisible(!navIsVisible)}
            />
          ) : (
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setNavIsVisible(!navIsVisible)}
            />
          )}
        </div>

        <nav className="flex text-dark-soft font-semibold gap-x-8 text-base items-center">
          {navItemsInfo.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-dark-hard transition-all duration-200 active:text-dark-hard hidden lg:block"
            >
              {item.name}
            </li>
          ))}
        </nav>

        <div className="relative text-dark-hard font-light bg-dark-light rounded-lg hidden lg:block ">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#959EAD]" />
          <input
            className="bg-dark-light placeholder:text-sm font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-10 pr-3 w-full py-2 focus:outline-none hover:bg-slate-100"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="buttons flex gap-4 md:gap-3 order-last">
          <HeartIcon className="bg-dark-light p-2 rounded-lg w-9 h-9 text-dark-hard hover:bg-primary-purple hover:text-white cursor-pointer transition-all duration-200" />

          <UserIcon className="bg-dark-light p-2 rounded-lg w-9 h-9 text-dark-hard hover:bg-primary-purple hover:text-white hidden lg:block cursor-pointer transition-all duration-200" />

          <ShoppingCartIcon className="bg-dark-light p-2 rounded-lg w-9 h-9 text-dark-hard hover:bg-primary-purple hover:text-white cursor-pointer transition-all duration-200" />
        </div>
      </header>

      {/* mobile view */}
      {!navIsVisible && (
        <header className=" h-screen py-5 px-8 w-full lg:hidden mx-auto shadow-sm">
          <div className="flex flex-col  justify-between gap-5">
            <div className="relative text-dark-hard font-light bg-dark-light rounded-lg max-w-sm">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#959EAD]" />
              <input
                className="bg-dark-light placeholder:text-sm font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-10 pr-3 w-full py-2 focus:outline-none hover:bg-slate-100"
                type="text"
                placeholder="Search"
              />
            </div>
            <nav className="flex text-primary-purple font-semibold gap-8 text-base  flex-col list-none">
              {navItemsInfo.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-dark-soft transition-all duration-200 active:text-dark-hard"
                >
                  {item.name}
                </li>
              ))}
            </nav>
            <button className="max-w-sm text-base font-bold bg-primary-purple border-primary-purple px-4 py-2 rounded-lg text-white hover:bg-white hover:text-primary-purple  hover:border-primary-purple border-2 transition-all duration-200">
              Sign Up
            </button>
            <button className="max-w-sm text-base font-bold bg-white border-2 border-primary-purple px-4 py-2 rounded-lg text-primary-purple hover:bg-primary-purple hover:text-white  hover:border-primary-purple transition-all duration-200">
              Login
            </button>
          </div>
        </header>
      )}
    </section>
  );
}

export default Navbar;
