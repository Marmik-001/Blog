import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export default function DashboardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const profilePicture = currentUser.profilePicture;
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
  });

  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUD_PRESET_NAME; // Corrected the environment variable name
  const [imageURL, setImageURL] = useState(profilePicture);
  const uploadWidgetRef = useRef(null);

  const handleImageChange = (publicId) => {
    const newImageURL = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;
    setImageURL(newImageURL);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const uwConfig = {
    cloudName,
    uploadPreset,
  };

  return (
    <div className="flex flex-col w-full pt-10 align-middle gap-7 dark:bg-black dark:text-white min-h-screen">
      <h1 className="self-center text-3xl">Profile</h1>
      <form className="place-self-center flex flex-col gap-7 w-2/3 md:w-5/12">
        <div className="self-center cursor-pointer">
          <img
            src={imageURL}
            alt=""
            onClick={() => uploadWidgetRef.current.openWidget()}
            className="self-center rounded-full cursor-pointer border-4 w-40 h-40 border-emerald-400 p-1.5"
          />
        </div>
        <CloudinaryUploadWidget
          uwConfig={uwConfig}
          setPublicId={handleImageChange}
          ref={uploadWidgetRef}
          onUploadSuccess={handleImageChange}
        />
        <div className="flex flex-col w-full gap-7 pl-2 md:ml-0">
          <input
            type="text"
            className="rounded-md placeholder:pl-3 p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 placeholder-black placeholder:font-semibold dark:focus:bg-black text-black dark:focus:text-white"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            value={formData.email}
            className="rounded-md p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 placeholder-black placeholder:font-semibold placeholder:pl-3 dark:focus:bg-black text-black dark:focus:text-white"
            name="email"
            onChange={handleChange}
            id="email"
          />
          <input
            type="password"
            className="rounded-md placeholder:pl-3 placeholder:font-semibold p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 dark:focus:bg-black text-black dark:focus:text-white"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="border-emerald-300 bg-black text-emerald-200 dark:text-white active:scale-95 border-2 w-full py-2 mt-2 dark:bg-gradient-to-b dark:from-emerald-300 dark:to-emerald-600 rounded-lg text-xl"
          >
            Update
          </button>
        </div>
      </form>
      <div className="text-red-500 flex justify-evenly px-5 mt-5">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
}


