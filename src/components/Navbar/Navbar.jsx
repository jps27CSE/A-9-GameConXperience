import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
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
          <a className="btn btn-ghost normal-case text-xl">GameConXperience</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <>
              {" "}
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-2"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <div>
                <h1 className="text-xl mr-2">{user.displayName}</h1>
              </div>
            </>
          )}
          {!user ? (
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          ) : (
            <button onClick={logOut} className="btn btn-secondary">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
