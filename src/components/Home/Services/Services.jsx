import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data.services));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-5 ">
      <div>
        <h1 className="text-5xl font-bold text-center mt-10 mb-5">Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
