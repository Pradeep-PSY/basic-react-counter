import { Link } from "react-router-dom";

export const Nextpage = ({ count }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button>
        <Link to="/">count</Link>
      </button>
    </div>
  );
};
