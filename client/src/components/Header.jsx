import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { FaMoon , FaSun} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector , useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import DropDown from "./DropDown";
export default function Header() {
  let iconStyles = { color: "#34D399", fontSize: "1.2em" };
  const [menu, setMenu] = useState(false);
  const { currentUser } = useSelector(state => state.user)
  const {currentTheme} = useSelector(state => state.theme)
  const dispatch = useDispatch()
  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentTheme]);
  return (
    <nav className="border-b-2 border-b-emerald-500  p-4 flex flex-row justify-between bg-emerald-50 dark:bg-black">
      <Link to="/" className="sm:text-xl mr-10  text-black ">
        <span className="px-2 bg-emerald-400 rounded-md mr-1">Master's</span>
        <span className="dark:text-white">Blog</span>
      </Link>
      <form className="bg-emerald-100 border-2 border-emerald-600 dark:bg-emerald-400 text-slate-800 px-2 md:pt-1 rounded-lg">
        <input
          type="text"
          className="bg-emerald-100 cursor-text text-xs h-4 sm:text-sm md:text-base dark:bg-emerald-400 focus:outline-none place-self-center dark:placeholder-black w-14  sm:w-24 lg:w-28 xl:w-40  text-slate-800"
          placeholder="Search.."
        />
        <button className="self-center">
          <LiaSearchSolid />
        </button>
      </form>
      <div >
        <div className=" hidden md:block">
          <Link
            to="/"
            className="px-3 lg:px-10  text-emerald-700 dark:text-emerald-200 font-semibold "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 lg:px-10 text-emerald-700 dark:text-emerald-200 font-semibold"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="pl-3 pr-2 lg:px-10 text-emerald-700 dark:text-emerald-200 font-semibold"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className=" flex flex-row">
        <button
        onClick={() => dispatch(toggleTheme())}
        className=" dark:bg-black bg-emerald-50  align-middle">
          
          { currentTheme === 'light' ? <FaMoon className="" style={iconStyles} /> : <FaSun className="" style={iconStyles} />}
        </button>
        {currentUser ? <DropDown  /> : 
         (<button className="bg-emerald-400 sm:py-1 px-4 ml-4 rounded-md align-middle">
        <Link to="/sign-up"> Sign In </Link>
      </button> )
      }
        
      </div>
      <button className="md:hidden" onClick={() => setMenu((prev) => !prev)}>
        <GiHamburgerMenu style={iconStyles} />
      </button>
      <div
        className={
          menu
            ? " absolute top-[55px] pb-4   pt-2 border-emerald-500 right-0 mt-2 text-center border-2 dark:bg-black  bg-emerald-200 w-36 flex flex-col gap-2 md:hidden "
            : "hidden"
        }
      >
        <div>
          {" "}
          <Link
            to="/"
            className="px-3 pb-1  lg:px-10 border-b-2  border-b-green-700 text-emerald-700 dark:text-emerald-200 font-semibold "
          >
            Home
          </Link>{" "}
        </div>
        <div>
          {" "}
          <Link
            to="/about"
            className="px-3 pb-1 lg:px-10  border-b-2 border-b-green-700 text-emerald-700 dark:text-emerald-200 font-semibold"
          >
            About
          </Link>{" "}
        </div>
        <div>
          <Link
            to="/projects"
            className="pl-3 pr-2 pb-1  lg:px-10  border-b-2 border-b-green-700 text-emerald-700 dark:text-emerald-200 font-semibold "
          >
            Projects
          </Link>
        </div>
      </div>

      
    </nav>
  );
}
