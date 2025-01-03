import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.getCustomParameters({ prompt: "select-account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      // console.log(resultFromGoogle);
      const data = {
        displayName: resultFromGoogle.user.displayName,
        email: resultFromGoogle.user.email,
        googlePhoto: resultFromGoogle.user.photoURL,
      };
      const response = await axios.post("/api/auth/google", data);
      console.log(response.status);
      if (response.status) {
        dispatch(signInSuccess(response.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="border-white bg-gradient-to-t from-emerald-500 via-emerald-200 to-emerald-500 text-black mt-8 dark:text-white active:scale-95  border-2 w-full py-2  dark:bg-gradient-to-b dark:from-black dark:via-slate-700 dark:to-black rounded-lg dark:border-gray-400 text-xl flex align-middle justify-center"
    >
      <AiOutlineGoogle className="w-6 h-6 mr-4 mt-1 text-black dark:text-white" />
      <h3>Join us with Google</h3>
    </button>
  );
}
