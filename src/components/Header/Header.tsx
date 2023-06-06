import { useSignOut, useAuthUser } from "react-auth-kit";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const signOut = useSignOut();
  const authUser = useAuthUser();

  return (
    <header className="flex flex-col-reverse gap-5 justify-between items-center md:flex-row py-3 w-5/6 my-0 mx-auto align-middle md:justify-between">
      <nav className="gap-10 flex text-stone-300 font-bold ">
        <Link
          to={"/"}
          className={`${
            location.pathname === "/"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          Home
        </Link>
        <Link
          to={"/works"}
          className={`${
            location.pathname === "/works"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          Works
        </Link>
        <Link
          to={"/about"}
          className={`${
            location.pathname === "/about"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          About
        </Link>
      </nav>
      <div className="flex gap-10">
        <div className="flex gap-5 items-center">
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="fill-stone-400 hover:fill-stone-300 cursor-pointer"
          >
            {" "}
            <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
          </svg>
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="fill-stone-400 hover:fill-stone-300 cursor-pointer"
          >
            {" "}
            <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
          </svg>
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="fill-stone-400 hover:fill-stone-300 cursor-pointer"
          >
            {" "}
            <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
          </svg>
        </div>
        {authUser() ? (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            <img src="exit.png" height="18px" width="18px" alt="logo" />
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            <img src="login.png" height="18px" width="18px" alt="logo" />
          </Link>
        )}
      </div>
    </header>
  );
}
