/* eslint-disable @next/next/no-img-element */
import React from "react";

const Overlay = () => {
  return (
    <div
      className="absolute z-20 top-0 inset-x-0 flex justify-center
    overflow-hidden pointer-events-none "
    >
      <div className="w-[180rem] flex-none justify-end">
        <picture>
          <img className="flex-none max-w-none hidden dark:block" src="/assets/images/dark-gradient.avif" alt="overlay " />
          <img className="flex-none max-w-none dark:hidden" src="/assets/images/gradient.avif" alt="overlay " />
        </picture>
      </div>
    </div>
  );
};

export default Overlay;
