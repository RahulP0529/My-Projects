import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import styles from "./Submenu.module.css"; // Import CSS module

const Submenu = ({ isVisible }) => {
  return (
    <div
      className={`${isVisible ? "flex" : "hidden"} ${styles.submenu}`}
    >
      {/* Rest of the code remains the same */}
    </div>
  );
};

export default Submenu;
