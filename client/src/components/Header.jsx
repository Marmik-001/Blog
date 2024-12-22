import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import {  FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  let iconStyles = { color: "limegreen", fontSize: "1.2em" };
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <nav className="border-b-2 mb-1 pb-2 p-3 flex flex-row justify-between">
      <Link to="/" className="sm:text-xl mr-10  text-black ">
        <span className="px-2 bg-emerald-400 rounded-md mr-1">Master's</span>
        Blog
      </Link>
      <form className="bg-emerald-100 text-slate-800 px-2 pt-1  rounded-lg">
        <input
          type="text"
          className="bg-emerald-100 cursor-text focus:outline-none place-self-center  w-14 sm:w-24 lg:w-28 xl:w-40  text-slate-800"
          placeholder="Search.."
        />
        <button className="self-center w-8 h-7 align-middle place-self-center ml-3 sm:h-5">
          <LiaSearchSolid />
        </button>
      </form>
      <div className={menu ? "md:inline hidden " : "block"}>
        <div className=" hidden md:block">
          <Link to="/" className="px-3 lg:px-10  text-emerald-700 font-semibold ">
            Home
          </Link>
          <Link to="/about" className="px-3 lg:px-10 text-emerald-700 font-semibold">
            About
          </Link>
          <Link to="/projects" className="pl-3 pr-2 lg:px-10 text-emerald-700 font-semibold">
            Projects
          </Link>
        </div>
      </div>

      <div className=" ">
        <button className=" dark:bg-black bg-white align-middle">
          <FaMoon className="" style={iconStyles} />
        </button>
        <button className="bg-emerald-400 sm:py-1 px-4 ml-4 rounded-md align-middle">
        <Link to='/sign-in'>  Sign In </Link>
        </button>
      </div>
      <button className="md:hidden" onClick={() => setMenu((prev) => !prev)}>
        <GiHamburgerMenu style={iconStyles} />
      </button>
      <div
        className={
          menu ? "showmenu absolute top-12 pb-4 pt-2 border-green-600 right-2 mt-2 text-center border-2 bg-emerald-200 w-32 flex flex-col gap-2 md:hidden " : "hidemenu"
        }
      >
      <div>  <Link to="/" className="px-3 lg:px-10 border-b-2 border-b-green-700 text-emerald-700 font-semibold ">
          Home
        </Link> </div>
       <div> <Link to="/about" className="px-3 lg:px-10  border-b-2 border-b-green-700 text-emerald-700 font-semibold">
          About
        </Link> </div>
       <div><Link to="/projects" className="pl-3 pr-2 lg:px-10  border-b-2 border-b-green-700 text-emerald-700 font-semibold ">
          Projects
        </Link></div>
      </div>

      <style>{`
        .showmenu{

        }
        .hidemenu{
        display:none;
        

        }
    `}</style>
    </nav>
  );
}
