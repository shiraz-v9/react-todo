import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ITask } from "./interfaces";

export function Taskdeets() {
  const [task, setTask] = useState<string>();
  const [body, setBody] = useState<string>();
  const { listID, list } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  useEffect(() => {
    //
    if (list != undefined && list != null) {
      console.log(listID);
      console.log(list[listID]);
      if (list[listID]?.task !== null && list[listID]?.task !== undefined) {
        setTask(list[listID]?.task);
        setBody(list[listID]?.body?.text);
      } else {
        setTask("click on a task");
      }
    }
  }, [listID]);

  const handleDetails = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    // props.content(body);
  };

  return (
    <div className="devborders deets">
      <h3 className="sticky title">{task}</h3>
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
