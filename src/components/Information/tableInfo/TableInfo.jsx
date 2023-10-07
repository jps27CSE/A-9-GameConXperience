import PropTypes from "prop-types";

const TableInfo = ({ item, rank }) => {
  return (
    <tr>
      <th>{rank}</th>
      <td>{item.winner.userName}</td>
      <td>{item.eventName}</td>
      <td>{item.winner.score}</td>
    </tr>
  );
};

export default TableInfo;

TableInfo.propTypes = {
  item: PropTypes.object,
  rank: PropTypes.number,
};
