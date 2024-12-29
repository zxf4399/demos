import { useEffect, useState } from "react";
import { AUTOMATIC_BATCHING_SCENARIO } from "./constants";
import LogEvents from "./LogEvents";

const NativeEventHandlers = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    // React 18 with createRoot batches these:
    setCount((prev) => prev + 1); // Does not re-render yet
    setFlag((prev) => !prev); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  };

  useEffect(() => {
    document.getElementById("button")?.addEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <h2>{AUTOMATIC_BATCHING_SCENARIO.NATIVE_EVENT_HANDLERS}</h2>
      <button id="button">Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents tag={AUTOMATIC_BATCHING_SCENARIO.NATIVE_EVENT_HANDLERS} />
    </div>
  );
};

export default NativeEventHandlers;
