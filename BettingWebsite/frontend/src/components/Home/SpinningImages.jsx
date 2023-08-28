import React from "react";
import { heroImages } from "../../constants";
import styles from "../../style";
import "./SpinningImages.css";

const SpinningImages = () => {
  return (
    <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative box-container`}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
      
      {/* Spinning images */}
      <div className="box">
        {heroImages.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={src} alt="" className="spinning-image" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpinningImages;
