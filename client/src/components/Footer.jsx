import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-emerald-50 dark:bg-black flex flex-col border-t-2 border-t-emerald-600 ">
      <div className="mb-4 mt-8">
        <Link to="/" className=" sm:text-xl  ml-2 text-black ">
          <span className="px-2 bg-emerald-400 rounded-md mr-1">Master's</span>
          <span className="dark:text-white">Blog</span>
        </Link>
      </div>
      <div className="flex flex-row mt-3 ml-2">
        <div className=" w-1/3 min-h-[50px] border-r-2 border-r-emerald-500 mx-4">
          <h3 className="dark:text-white"> ABOUT</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>My Blogs</span>
            <span>Portfolio</span>
          </div>
        </div>
        <div className="w-1/3 min-h-[50px] border-r-2 border-r-emerald-500 mx-4 ">
          <h3 className="dark:text-white"> FOLLOW ME</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>Github</span>
            <span>Linkdin</span>
          </div>
        </div>
        <div className="w-1/3 min-h-[50px] mx-4">
          <h3 className="dark:text-white"> LEGAL</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
      <div className="dark:text-white mt-8 mb-4 ml-2 border-b-2 border-b-emerald-600 pb-4  ">
        <div className="">
          <h3 className="text-gray-500 mb-4"> © 2024 Master's Blog</h3>
        </div>
        <div className="flex flex-row gap-10  text-2xl">
          <FaDiscord />
          <FaInstagram />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
export default Footer;
