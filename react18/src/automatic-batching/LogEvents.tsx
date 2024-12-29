import { useLayoutEffect } from "react";

type LogEventsProps = {
  tag: string;
};

const LogEvents = ({ tag }: LogEventsProps) => {
  useLayoutEffect(() => console.log(tag, "Commit"));

  console.log(tag, "Render");

  return null;
};

export default LogEvents;
