import { useEffect, useState } from "react";
import LogEvents from "./LogEvents";
import { AUTOMATIC_BATCHING_SCENARIO } from "./constants";

const CASE = "SetTimeout";

const SetTimeout = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // React 18 with createRoot batches these:
      setCount((prev) => prev + 1); // Does not re-render yet
      setFlag((prev) => !prev); // Does not re-render yet
      // React will only re-render once at the end (that's batching!)
    }, 1000);
  }, []);

  return (
    <div>
      <h2>{AUTOMATIC_BATCHING_SCENARIO.SET_TIMEOUT}</h2>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents tag={AUTOMATIC_BATCHING_SCENARIO.SET_TIMEOUT} />
    </div>
  );
};

export default SetTimeout;
