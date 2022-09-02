import { Link } from "react-router-dom";

const Table = ({ polls }) => {
  return (
    <table className="w3-table w3-striped w3-bordered w3-padding-24">
      <thead>
        <tr>
          <th>Option 1</th>
          <th>Option 2</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {polls.map((poll) => (
          <tr key={poll.id}>
            <td>{poll.optionOne.text}</td>
            <td>{poll.optionTwo.text}</td>
            <td>
              {" "}
              <Link
                to={`questions/${poll.id}`}
                className="w3-button w3-black w3-hover-blue-gray"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
