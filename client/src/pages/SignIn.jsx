import React from "react";
import SignInCard from "../components/SignInCard";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-[95vh] dark:bg-black flex flex-col md:flex-row items-center">
      <div className="w-full md:border-r-2 py-24 md:py-44  md:border-r-emerald-500 md:w-[50%] flex flex-col justify-center items-center">
        <Link to="/" className="text-xl sm:text-2xl mb-4 text-black">
          {" "}
          <span className="px-2 bg-emerald-400 rounded-md mr-1">Master's</span>
          <span className="dark:text-white">Blog</span>
        </Link>
        <p className="dark:text-white p-5 px-8 text-sm sm:text-base lg:text-lg ">
          Welcome to my blog, where I share insights, updates, and learnings
          about the technologies I explore and use. Join me on this journey of
          growth and discovery in the tech world.
        </p>
      </div>
      <div className="  md:pl-24 w-4/6 md:w-[50%] flex flex-col justify-center items-left ">
        <SignInCard />
      </div>
    </div>
  );
}
