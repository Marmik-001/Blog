import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUpCard() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [errormsg, setErrormsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrormsg(null);
    setLoading(true);
    try {
      if (!formData.username || !formData.email || !formData.password) {
        setErrormsg("All fields are required !");
        
      }
      const response = await axios.post("/api/auth/signup", formData);
      const status = response.status;
      // console.log(status);
      
      if (status === 201) console.log("signup successful");
      navigate('/sign-in')
      setLoading(false);
    } catch (error) {
      setErrormsg(error.response.data.message);
      setLoading(false)
    }
  };
  
  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className=" md:w-[75%] flex flex-col gap-7 dark:text-white"
      >
        <div className="flex flex-col">
          <label htmlFor="username">User Name</label>
          <input
            className="rounded-md p-1 border-2 border-emerald-500 bg-emerald-50 mt-1  dark:focus:bg-black text-black dark:focus:text-white "
            type="text"
            name="username"
            id="username"
            placeholder="Ex. John Doe"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">User Email</label>
          <input
            className="rounded-md p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 dark:focus:bg-black text-black dark:focus:text-white"
            type="email"
            name="email"
            id="email"
            placeholder="Ex. john@gmail.com"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">User Password</label>
          <input
            className="rounded-md p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 dark:focus:bg-black text-black dark:focus:text-white"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>
        {errormsg && <div className="text-red-500">{errormsg}</div>}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="border-emerald-300 bg-black text-emerald-200 dark:text-white active:scale-95  border-2 w-full py-2 mt-2 dark:bg-gradient-to-b dark:from-emerald-300 dark:to-emerald-600 rounded-lg text-xl"
          >
          {loading ? (<div>Loading...</div>) : 'Sign Up'}
          </button>
        </div>
      </form>
      <div></div>
      <div className="">
        <span className="dark:text-emerald-200">
          Already a user ?{" "}
          <a className="text-blue-500" href="/sign-in">
            Sign in
          </a>
        </span>
      </div>
    </div>
  );
}
