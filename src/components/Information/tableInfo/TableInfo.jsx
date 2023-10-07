import PropTypes from "prop-types";

const TableInfo = ({ item }) => {
  const { id } = item;
  return (
    <tr>
      <th>{id}</th>
      <td>{item.winner.userName}</td>
      <td>{item.eventName}</td>
      <td>{item.winner.score}</td>
    </tr>
  );
};

export default TableInfo;

TableInfo.propTypes = {
  item: PropTypes.object,
};
