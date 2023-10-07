import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const IndividualService = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const intParam = parseInt(params.id);

  useEffect(() => {
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => setData(data.services));
  }, []);

  const filterData = data.find((indi) => indi.id === intParam);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <img
            className="w-full h-[500px] mb-10 mt-10 rounded-lg"
            src={filterData?.image}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 mt-10 mb-10 p-5 ">
          <div className="my-auto">
            <h1 className=" ml-5 text-2xl md:text-4xl lg:text-5xl  md:w-[300px] lg:w-[500px] font-bold  text-cyan-400">
              {filterData?.name}
              <div className="my-auto ">
                <p className="mt-5 text-lime-500">
                  Price: ${filterData?.price}
                </p>
              </div>
              <Link to={`/ticket/${filterData?.id}`}>
                <button className="btn btn-error">Get Your Tickets</button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <p className="text-2xl font-bold  text-cyan-400">Description:</p>
      <p className="text-xl mb-5  md:w-auto lg:w-auto">
        {filterData?.description}
      </p>
    </div>
  );
};

export default IndividualService;
