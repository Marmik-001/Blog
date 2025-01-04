import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function DropDown() {
  const currentUser = useSelector((state) => state.user);
  console.log("current user : ", currentUser); // Log the profilePicture property
  const profilePicture = currentUser.currentUser.profilePicture;
  const displayName = currentUser.currentUser.displayName;
  const username = currentUser.currentUser.username;
  const email = currentUser.currentUser.email;

  return (
    <div className=" rounded-full w-8 h-8 mx-3 ml-10  align-middle">
      <style>
        {`
          .dropdown:focus-within .dropdown-menu {
            opacity: 1;
            transform: translate(0) scale(1);
            visibility: visible;
          }
        `}
      </style>
      <div className="flex items-center justify-center dark:text-white">
        <div className="relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
            <button
              className="inline-flex justify-center  text-sm font-medium leading-5  transition duration-150 ease-in-out text-black dark:text-white  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-emerald-300 active:text-gray-800"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <img
                src={profilePicture}
                className="rounded-full border-2 border-emerald-300 p-0.5"
                alt={displayName}
              />
            </button>
          </span>
          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 ">
            <div
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-black border dark:border-emerald-400 border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div className="px-4 py-3">
                <p className="text-sm leading-5 ">Signed in as</p>
                <p className="text-sm font-medium leading-5 text-gray-900 dark:text-white truncate">
                  @{username}
                </p>
              </div>
              <div className="py-1">
                <div
                  className="text-gray-700 dark:text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem"
                >
                  {email}
                </div>
                <Link
                  to="/dashboard?tab=profile"
                  className="text-gray-700 dark:text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer hover:border-l-[3px] hover:border-l-emerald-500"
                  role="menuitem"
                >
                  Profile
                </Link>
                <button
                  className="text-gray-700 flex dark:text-white justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer  hover:border-l-[3px] hover:border-l-emerald-500"
                  role="menuitem"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
