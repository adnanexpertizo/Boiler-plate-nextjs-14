"use client";
import React from "react";
import Drawer from "./Drawer";
import { navbarRoutes } from "../route";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./ToggleButton";
const Navbar = () => {
  return (
    <nav className="navbar px-2 md:px-10 h-20 md:h-28 bg-primary text-neutral">
      <div className="navbar-start flex ml-2 sm:ml-auto">
        <Link
          href="/"
          className="flex justify-end items-end md:h-[55px] md:w-[180px] h-[40px] w-[130px] relative"
        >
          <Image src="/images/logo.png" alt="Logo" layout="fill" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal lg:px-1">
          {navbarRoutes.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="btn btn-link px-3 xl:px-6 no-underline hover:no-underline text-[14px] text-primary-content xl:text-[18px] font-light"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        {/* <ThemeToggleButton /> */}
        <ThemeChanger />
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
