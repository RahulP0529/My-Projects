import React from "react";
import styles from "../../style";
import { discount } from "../../assets";
import Button from "../Global/Button";

import SpinningImages from "./SpinningImages"; // Import the new component

const Hero = () => {
  const isMobile = window.innerWidth <= 768; // Check if screen width is less than or equal to 768px

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Empowering</span> Your{" "}
            <span className="text-white">Bets,</span> One Insight at a time
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[64px] md:text-[72px] text-white ss:leading-[100.8px] leading-[75px]">
            Bet Smart <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Win Big</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Repeat.
        </h1>
        <Button styles={`mt-10`} />
      </div>
      
      {/* Include the SpinningImages component */}
      {!isMobile && <SpinningImages />}
    </section>
  );
};

export default Hero;
