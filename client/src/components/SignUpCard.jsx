export default function SignUpCard() {
  return (
    <div className="flex flex-col gap-4">
      <form
        action=""
        method="post"
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
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">User Password</label>
          <input
            className="rounded-md p-1 border-2 border-emerald-500 bg-emerald-50 mt-1 dark:focus:bg-black text-black dark:focus:text-white"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
      </form>
      <div></div>
      <div className="">
        <span className="">
          Already a user ?{" "}
          <a className="text-blue-500" href="/sign-in">
            Sign in
          </a>
        </span>
      </div>
    </div>
  );
}
