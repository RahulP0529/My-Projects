import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { close, menu, valorant } from "../../../assets";
import { navLinks } from "../../../constants";
import styles from "./Navbar.module.css"; // Import CSS module

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center ${styles.navbar}`}>
      {/* Logo */}
      <NavLink to="/" className={styles.logo}>
        <img src={valorant} alt="Logo" className="w-full h-full" />
      </NavLink>

      {/* Main Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] relative group mr-10`}
          >
            <NavLink
              to={nav.to}
              activeClassName="text-white"
              className="text-dimWhite"
            >
              {nav.title}
            </NavLink>

            {/* Submenu for specific navLinks */}
            {nav.submenu && (
              <ul className="submenu bg-white text-black border rounded-lg p-2 space-y-1 absolute hidden group-hover:block">
                {nav.submenu.map((subNavItem) => (
                  <li
                    key={subNavItem.id}
                    className="cursor-pointer text-sm hover:bg-gray-200 px-2 py-1 rounded"
                  >
                    <NavLink
                      to={subNavItem.to}
                      className="text-black no-underline"
                    >
                      {subNavItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Submenu for mobile */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] mb-4`}
              >
                <NavLink
                  to={nav.to}
                  activeClassName="text-white"
                  className="text-dimWhite"
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
