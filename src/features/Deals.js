import React from "react";

function Deals() {
  return (
    <section className="container mx-auto p-5 md:py-5 md:px-16 flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center">
      <img
        className="cursor-pointer md:w-1/2"
        src="Breezy.svg"
        alt="breezy"
      />
      <img className="cursor-pointer md:w-1/2" src ="coziness.svg" alt="coziness" />
    </section>
  );
}

export default Deals;
