import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ITask, ITaskTime } from "./interfaces";

export function Taskdeets() {
  const [task, setTask] = useState<any>("");
  const [body, setBody] = useState<string>();
  const [time, setTime] = useState<ITaskTime>();
  const { listID, list } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  useEffect(() => {
    //
    if (list !== undefined && list !== []) {
      var filteredList: ITask[] = list.filter((x) => {
        return x.id === listID;
      });
      console.log("task Object ", filteredList);
      if (listID !== null && listID !== undefined) {
        setTask(filteredList[0].task);
        setBody(filteredList[0]?.body?.text);
        setTime({
          Day: filteredList[0].created.Day,
          Time: filteredList[0].created.Time,
        });
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
      <p>{time ? `${time?.Day} - ${time?.Time}` : ""}</p>
      <textarea
        className="modtxt"
        placeholder="add description to task"
        value={body}
        onChange={handleDetails}
      ></textarea>
    </div>
  );
}
