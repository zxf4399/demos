import { useState } from "react";
import { AUTOMATIC_BATCHING_SCENARIO } from "./constants";
import LogEvents from "./LogEvents";
import { delay } from "./utils";

const Promises = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    delay(1000).then(() => {
      // React 18 with createRoot batches these:
      setCount((prev) => prev + 1); // Does not re-render yet
      setFlag((prev) => !prev); // Does not re-render yet
      // React will only re-render once at the end (that's batching!)
    });
  };

  return (
    <div>
      <h2>{AUTOMATIC_BATCHING_SCENARIO.PROMISES}</h2>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents tag={AUTOMATIC_BATCHING_SCENARIO.PROMISES} />
    </div>
  );
};

export default Promises;
