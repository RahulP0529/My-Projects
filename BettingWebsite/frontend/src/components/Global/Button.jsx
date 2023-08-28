import React from "react";

const Button = ({ styles }) => {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/";
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={redirectToInstagram}
    >
      Get Started
    </button>
  );
};

export default Button;
