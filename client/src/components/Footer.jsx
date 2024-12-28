import { Link } from "react-router-dom";

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
          <h3> ABOUT</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>My Blogs</span>
            <span>Portfolio</span>
          </div>
        </div>
        <div className="w-1/3 min-h-[50px] border-r-2 border-r-emerald-500 mx-4 ">
          <h3> FOLLOW ME</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>Github</span>
            <span>Linkdin</span>
          </div>
        </div>
        <div className="w-1/3 min-h-[50px] mx-4">
          <h3> LEGAL</h3>
          <div className="flex flex-col mt-4 gap-y-2 text-gray-500 text-sm lg:text-base ">
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
      <div>socials</div>
    </div>
  );
}
export default Footer;
