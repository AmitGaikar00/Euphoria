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

function App() {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navItemsInfo = [
    { name: "Shop", type: "link", href: "/" },
    { name: "Men", type: "link", href: "/" },
    { name: "Women", type: "link", href: "/" },
    { name: "Combos", type: "link", href: "/" },
    { name: "Joggers", type: "link", href: "/" },
  ];

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto p-5 w-full flex justify-between items-center">
        <img src="Euphoria.svg" className="w-16 cursor-pointer hidden lg:block" alt="logo" />

        <div className="lg:hidden z-50 order-first flex gap-5 items-center">
          <img src="Euphoria.svg" className="w-16 cursor-pointer order-last" alt="logo" />
          {navIsVisible ? (
            <Bars3Icon
              className="w-6 h-6"
              onClick={() => setNavIsVisible(!navIsVisible)}
            />
          ) : (
            <XMarkIcon
              className="w-6 h-6"
              onClick={() => setNavIsVisible(!navIsVisible)}
            />
          )}
        </div>

        <ul className="flex text-dark-soft font-semibold gap-x-8 text-base items-center">
          {navItemsInfo.map((item) => (
            <li className="cursor-pointer hover:text-dark-hard transition-all duration-200 active:text-dark-hard hidden lg:block">
              {item.name}
            </li>
          ))}
        </ul>

        <div className="relative text-dark-hard font-light bg-dark-light rounded-lg hidden lg:block">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#959EAD]" />
          <input
            className="bg-dark-light placeholder:text-sm font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-10 pr-3 w-full py-2 focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="buttons flex gap-3 order-last">
          <button className="bg-dark-light p-2 rounded-lg">
            <HeartIcon className="w-5 h-6 text-dark-hard" />
          </button>
          <button className="bg-dark-light p-2 rounded-lg hidden lg:block">
            <UserIcon className="w-5 h-6" />
          </button>
          <button className="bg-dark-light p-2 rounded-lg">
            <ShoppingCartIcon className="w-5 h-6" />
          </button>
        </div>
      </header>
    </section>
  );
}

export default App;
