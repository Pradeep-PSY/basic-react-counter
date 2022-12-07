import { useState } from "react";
import { MainRoutes } from "./Pages/MainRoutes";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainRoutes count={count} setCount={setCount} />
    </div>
  );
}
