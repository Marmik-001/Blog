import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-emerald-50 dark:bg-black grid lg:grid-rows-3">
      <Link to="/" className="sm:text-xl mr-10 ml-2 text-black ">
        <span className="px-2 bg-emerald-400 rounded-md mr-1">Master's</span>
        <span className="dark:text-white">Blog</span>
      </Link>
      <div className="">
        <div className="">
          {" "}
          <h3> ABOUT</h3>
          <div className="">
            <span>My Blogs</span>
            <span>Portfolio</span>
          </div>
        </div>
        <div className="">
          <h3> FOLLOW ME</h3>
          <div className="">
            <span>Github</span>
            <span>Linkdin</span>
          </div>
        </div>
        <div className="">
          <h3> LEGAL</h3>
          <div className="">
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
