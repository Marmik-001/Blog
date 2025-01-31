import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// import e from "express";
import { updateFailure , updateStart , updateSucess } from "../redux/user/userSlice";
import axios from "axios";
import { set } from "mongoose";
export default function DashboardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const profilePicture = currentUser.profilePicture;
  const [formData, setFormData] = useState({
    username:currentUser.username,
    email:currentUser.email,
    profilePicture:currentUser.profilePicture,
    password:''
  });
  const dispatch = useDispatch()
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUD_PRESET_NAME; // Corrected the environment variable name
  const [imageURL, setImageURL] = useState(profilePicture);
  const uploadWidgetRef = useRef(null);
  const [errorMsg , setErrorMsg] = useState(null)
  const [loadingMsg , setLoadingMsg] = useState(null)
  const handleImageChange = (info) => {
    console.log(info.secure_url);
    
    // Use the secure_url from the info object
    const newImageURL = info.secure_url;
    
    // Update the state with the new image URL
    setImageURL(newImageURL);
    setFormData( {...formData , profilePicture:newImageURL})
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
  console.log(currentUser._id)

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoadingMsg('Updating User Info')
    if(Object.keys(formData).length === 0){
      setLoadingMsg(null)
      return;
    }
    try {
      dispatch(updateStart());
      const response = await axios.put(`/api/user/update/${currentUser._id}`, formData);
      if(!response.ok) {
        dispatch(updateFailure())
      }
      dispatch(updateSucess(response.data))
      setLoadingMsg(null)
      setErrorMsg(null)
      window.alert('User Information Updated')
    } catch (error) {
      setLoadingMsg(null)
      setErrorMsg(error.response.data.message)
      
    }
    
  }


  return (
    
    
    <div className="flex flex-col w-full pt-10 align-middle gap-7 dark:bg-black dark:text-white min-h-screen">
      <h1 className="self-center text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="place-self-center flex flex-col gap-7 w-2/3 md:w-5/12">
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
            onChange={handleChange}
            id="password"
            placeholder="Password"
          />
          <button
            type="submit"
           
            className="border-emerald-300 bg-black text-emerald-200 dark:text-white active:scale-95 border-2 w-full py-2 mt-2 dark:bg-gradient-to-b dark:from-emerald-300 dark:to-emerald-600 rounded-lg text-xl"
          >
            { loadingMsg ? loadingMsg : 'Update'}
          </button>
        </div>
        <div className="text-red-500 font-semibold">
          {errorMsg && `${errorMsg}`}
        </div>
      </form>
      <div className="text-red-500 flex justify-evenly px-5 mt-5">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
}


