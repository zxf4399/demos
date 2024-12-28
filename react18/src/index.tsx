import { useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
const LogEvents = () => {
  useLayoutEffect(() => console.log("Commit"));

  console.log("Render");

  return null;
};

const App = () => {
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
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
};

root.render(<App />);
