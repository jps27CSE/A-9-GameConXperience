import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-6xl mx-auto flex item-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-[300px] h-[400px]"
            src={user.photoURL}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name</h2>
          <input
            className="input"
            value={user.displayName}
            type="text"
            name=""
            disabled
          />
          <h2 className="card-title">Email</h2>
          <input
            className="input"
            value={user.email}
            type="text"
            name=""
            disabled
          />

          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-neutral">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
