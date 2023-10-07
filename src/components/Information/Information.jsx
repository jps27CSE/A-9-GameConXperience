import { useEffect, useState } from "react";
import TableInfo from "./tableInfo/tableInfo";

const Information = () => {
  const [data, setData] = useState([]);

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
    <div className="max-w-6xl mx-auto">
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
              {data.map((item) => (
                <TableInfo key={item.id} item={item} />
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
