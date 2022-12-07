import { Routes, Route } from "react-router-dom";
import { Counter } from "./Counter";
import { Nextpage } from "./Nextpage";

export const MainRoutes = ({ count, setCount }) => {
  return (
    <Routes>
      <Route path="/next" element={<Nextpage count={count} />} />
      <Route path="/" element={<Counter count={count} setCount={setCount} />} />
    </Routes>
  );
};
