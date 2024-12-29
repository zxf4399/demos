import { createRoot } from "react-dom/client";
import AutomaticBatching from "./automatic-batching";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
  return (
    <>
      <AutomaticBatching />
    </>
  );
};

root.render(<App />);
