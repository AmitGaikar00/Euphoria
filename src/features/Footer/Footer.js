import React from "react";
import FooterItem from "./FooterItem";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Footer() {
  const footerInfo = [
    {
      name: "Need Help",
      list: [
        "Contact Us",
        "Tracke Order",
        "Returns & Refunds",
        "FAQ's",
        "Career",
      ],
    },
    {
      name: "Company",
      list: [
        "About Us",
        "euphoria Blog",
        "euphoriastan",
        "Collaboration",
        "Media",
      ],
    },
    {
      name: "More info",
      list: [
        "Term and Conditions",
        "Privacy Privacy",
        "Shipping Policy",
        "Sitemap",
      ],
    },
    {
      name: "Location",
      list: [
        "support@euphoria.in",
        "Eklingpura Chouraha, Ahmedabad Main Road",
        "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
      ],
    },
  ];
  return (
    <section className=" bg-[#2A2F2F]">
      <footer className="container mx-auto w-full text-white px-5 py-20 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {footerInfo.map((item, index) => (
            <FooterItem key={index} name={item.name} list={item.list} />
          ))}
          <div className="flex gap-2.5 grid-rows-4 py-10">
            <BiLogoFacebook
              color="black"
              className="p-1 text-2xl rounded-lg bg-white flex justify-between items-center cursor-pointer "
            />
            <FaInstagram
              color="black"
              className="p-1 text-2xl rounded-lg bg-white flex justify-between items-center cursor-pointer "
            />
            <FaTwitter
              color="black"
              className="p-1 text-2xl rounded-lg bg-white flex justify-between items-center cursor-pointer "
            />
            <FaLinkedin
              color="black"
              className="p-1 text-2xl rounded-lg bg-white flex justify-between items-center cursor-pointer "
            />
          </div>
          <div></div>
          <div className="flex flex-col gap-5 col-span-2">
            <h3 className="font-semibold text-xl">Download The App</h3>
            <div className="flex gap-10">
              <div className="playstore flex gap-2 justify-between items-center">
                <img src="images/playstore.png" alt="" />
                <p className="text-[0.5rem]">
                  Android app on{" "}
                  <span className="block font-semibold text-sm">
                    Google play
                  </span>
                </p>
              </div>
              <div className="iphone flex gap-2 justify-between items-center">
                <img src="images/iphone.png" alt="" />
                <p className="text-[0.5rem]">
                  Availalbe on the{" "}
                  <span className="block font-semibold text-sm">App Store</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-dark-soft mt-10 md:mt-5" />
        <div className="py-5 flex justify-between items-center">
          <h3 className="font-semibold text-xl">Popular Categories </h3>
          <ChevronDownIcon className="h-6 cursor-pointer" />
        </div>
        <hr className="border-dark-soft" />

        <p className="text-xs p-5 md:p-8 flex justify-center font-semibold">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Footer;
