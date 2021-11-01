import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ITask } from "./interfaces";

export function Taskdeets() {
  const [task, settask] = useState<any>("");
  const [body, setBody] = useState<any>("");
  const { listID, list } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  useEffect(() => {
    //
    if (list !== undefined && list !== [] && list !== null) {
      console.log(listID);
      console.log(list[listID]);
      // settask(list[listID].task);
      // setBody(list[listID].body?.text);
    }
  }, [listID]);

  const handleDetails = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    // props.content(body);
  };

  return (
    <div className="devborders deets">
      <h1 className="sticky title">{task}</h1>
      <p>add description to task</p>
      <textarea
        className="modtxt"
        placeholder="details..."
        value={body}
        onChange={handleDetails}
      ></textarea>
    </div>
  );
}
