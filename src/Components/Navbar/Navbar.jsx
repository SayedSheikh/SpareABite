import React, { use, useEffect } from "react";
import { Link, NavLink } from "react-router";
import ThemeControl from "./ThemeControl";
import { ThemeContext } from "../../Contexts/ThemeContext";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  // const [theme, setTheme] = useState(defaultTheme);
  const { theme, setTheme } = use(ThemeContext);
  document.querySelector("html").setAttribute("data-theme", theme);

  const { user, logout } = useAuth();

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful !!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 border-b-secondary"
            } rounded-none px-2 mx-1 pb-0`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableFood"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 border-b-secondary"
            } rounded-none  px-2 mx-1 pb-0`
          }>
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addFood"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 border-b-secondary"
            } rounded-none  px-2 mx-1 pb-0`
          }>
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageFood"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 border-b-secondary"
            } rounded-none px-2 mx-1 pb-0`
          }>
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/foodRequest"
          className={({ isActive }) =>
            `${
              isActive && "border-b-2 border-b-secondary"
            } rounded-none  px-2 mx-1 pb-0`
          }>
          My Requested Foods
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky w-full top-0 z-100 bg-base-200 shadow-sm shadow-primary">
      <div className="navbar w-11/12  max-w-[1400px] mx-auto font-inter px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="relative menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow shadow-primary">
              <div className="self-end right-[20%] -top-1 pl-2 w-[10px] absolute z-10">
                <ThemeControl
                  handleTheme={handleTheme}
                  theme={theme}
                  type={"secondary"}></ThemeControl>
              </div>
              {links}
            </ul>
          </div>

          <Link className="text-xl pl-0 max-w-[150px] h-[50px] cursor-pointer flex items-center">
            {theme === "light" ? (
              <img
                className="w-full "
                src="/public/light-mode-logo.png"
                alt="logo"
              />
            ) : (
              <img
                className="w-full "
                src="/public/darkmode-logo.png"
                alt="logo"
              />
            )}
          </Link>
        </div>
        <div className="navbar-center grow-1 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-1">
            {user ? (
              <>
                <div
                  data-tip={user?.displayName}
                  className={`avatar mr-1 mt-1 w-[30px] h-[30px] tooltip tooltip-bottom  cursor-pointer`}>
                  <div className="ring-primary  w-full   rounded-full ring-2">
                    <img className="w-full" src={user.photoURL} />
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary w-[60px] sm:w-fit">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary w-[60px] sm:w-fit">
                  LogIn
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-outline btn-secondary w-[60px] sm:w-fit">
                  SignUp
                </Link>
              </>
            )}

            <ThemeControl
              handleTheme={handleTheme}
              theme={theme}
              type={"main"}></ThemeControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
