import { Link } from "react-router-dom";

export const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <button>
        <Link to="/next">Next</Link>
      </button>
    </div>
  );
};
