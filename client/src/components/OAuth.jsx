import { AiOutlineGoogle } from "react-icons/ai";
export default function OAuth() {
  return (
    <button type="button" className="border-white bg-gradient-to-t from-emerald-500 via-emerald-200 to-emerald-500 text-black mt-8 dark:text-white active:scale-95  border-2 w-full py-2  dark:bg-gradient-to-b dark:from-black dark:via-slate-700 dark:to-black rounded-lg dark:border-gray-400 text-xl flex align-middle justify-center">
        <AiOutlineGoogle className="w-6 h-6 mr-4 mt-1 text-black dark:text-white"/>
        <h3>Join us with Google</h3>
    </button>
  )
}