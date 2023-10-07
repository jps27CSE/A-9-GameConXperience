import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Ticket = () => {
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState([]);
  const params = useParams();
  const intParam = parseInt(params.id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEvent(data.services));
  }, []);

  const filterData = event.find((indi) => indi.id === intParam);

  const formHandle = (e) => {
    e.preventDefault();
    toast.success("Ticket Booked Successfully");
    navigate("/");
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={formHandle}>
              <h1 className="text-2xl font-bold text-center">
                Get Your Ticket
              </h1>
              <div className="form-control">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Event Name</span>
                  </label>
                  <input
                    type="text"
                    value={filterData?.name}
                    placeholder="event"
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    value={filterData?.price}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  placeholder="email"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  placeholder="email"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Get</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
