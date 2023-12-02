import React from "react";

function FooterItem({ name, list }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-dark-light text-lg md:text-xl ">
        {name}
      </h3>
      <ul className="flex flex-col gap-3">
        {list.map((item, index) => (
          <li
            className=" list-none text-gray-400 hover:text-dark-light text-sm md:text-lg cursor-pointer transition-all duration-250"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterItem;
