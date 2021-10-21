import { ChangeEvent, useState } from "react";
import { Homepage } from "./Homepage";
import { ITaskBody } from "./interfaces";

export function Taskdeets(props: any) {
  const [body, setBody] = useState<string>("");

  const handleDetails = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    props.content(body);
  };

  return (
    <div className="devborders deets">
      <h1 className="sticky title">Details</h1>
      <p>add description to task</p>
      <textarea
        placeholder="details..."
        value={body}
        onChange={handleDetails}
      ></textarea>
    </div>
  );
}
