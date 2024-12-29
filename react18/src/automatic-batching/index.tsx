import NativeEventHandlers from "./NativeEventHandlers";
import Promises from "./Promises";
import ReactEventHandlers from "./ReactEventHandlers";
import SetTimeout from "./SetTimeout";

const AutomaticBatching = () => {
  return (
    <>
      <ReactEventHandlers />
      <SetTimeout />
      <Promises />
      <NativeEventHandlers />
    </>
  );
};

export default AutomaticBatching;
