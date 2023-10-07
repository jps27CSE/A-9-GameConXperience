import { useEffect, useState } from "react";
import TableInfo from "./tableInfo/tableInfo";
import AOS from "aos";
import "aos/dist/aos.css";

const Information = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 500,
    });
  }, []);

  useEffect(() => {
    fetch("/leaderboard.json")
      .then((res) => res.json())
      .then((item) => {
        const sortedData = item.leaderboard.sort(
          (a, b) => b.winner.score - a.winner.score
        );
        setData(sortedData);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto" data-aos="fade-down">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Event Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <TableInfo key={item.id} item={item} rank={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* table ends */}
    </div>
  );
};

export default Information;
