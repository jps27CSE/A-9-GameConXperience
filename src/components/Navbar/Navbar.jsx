import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li id="active_nav">
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li id="active_nav">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
      {user && (
        <li id="active_nav">
          <NavLink to="/info">Leaderboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="max-w-6xl mx-auto  ">
      <div className="navbar bg-base-100 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-sm md:text-xl lg:text-xl">
            GameConXperience
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-2"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <div>
                <h1 className="text-sm md:text-xl lg:text-xl mr-2">
                  {user.displayName}
                </h1>
              </div>
            </>
          )}
          {!user ? (
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          ) : (
            <button onClick={logOut} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
