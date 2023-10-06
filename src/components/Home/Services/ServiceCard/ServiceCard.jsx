import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure className="h-[400px] ">
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="mt-5">{description}</p>
          <p className="text-xl font-bold text-center">Price: ${price}</p>
          <div className="card-actions justify-end w-auto mx-auto ">
            <Link to={`/service/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
