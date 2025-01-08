import React from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Drawer from "./Drawer";
import { navbarRoutes } from "../route";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar px-2 md:px-10 py-5 h-20 md:h-28 bg-base-100">
      <div className="navbar-start flex">
        <Link href={'/'} className="btn btn-ghost flex h-full">
          <Image className="w-16 md:w-28 lg:w-32" src={Logo} alt="Logo" />
          <p className="text-xs md:text-sm text-[13px] xl:text-[15px]">
            Aurtel Consulting Group
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal lg:px-1">
          {navbarRoutes.map((item, index) => (
            <li key={index} className="text-primary font-bold">
              <Link href={item.href} className="btn btn-ghost text-[13px] xl:text-[15px]">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
