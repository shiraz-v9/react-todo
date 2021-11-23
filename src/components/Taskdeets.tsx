import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { addTask } from "../Redux/task";
import { ITask, ITaskTime } from "./interfaces";

export function Taskdeets() {
  const [task, setTask] = useState<string>("");
  const [body, setBody] = useState<string>();
  const [time, setTime] = useState<ITaskTime>();
  const { listID, list } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      list !== undefined &&
      list !== [] &&
      listID !== null &&
      listID !== undefined
    ) {
      var filteredList: ITask[] = list.filter((x) => {
        return x.id === listID;
      });

      if (
        filteredList !== undefined &&
        filteredList !== [] &&
        filteredList !== null
      ) {
        console.log("task Object ", filteredList);
        setTask(filteredList[0]?.task);
        setBody(filteredList[0]?.body?.text);
        setTime({
          Day: filteredList[0]?.created.Day,
          Time: filteredList[0]?.created.Time,
        });
      }
    } else {
      setTask("click on a task");
    }
  }, [listID]);

  useEffect(() => {
    if (body !== "" && body !== null && body !== undefined) {
      updateBody();
    }
    if (body === "") {
      console.log("body empty");
    }
  }, [body]);

  const updateBody = () => {
    let untouchedList: ITask[] = list.filter((x) => {
      return x.id !== listID;
    });
    console.log("listID ", listID);
    var filteredList: ITask[] = list.filter((x) => {
      return x.id === listID;
    });
    let newList: ITask = {
      id: filteredList[0].id,
      task: filteredList[0].task,
      body: { text: body },
      created: {
        Day: filteredList[0].created.Day,
        Time: filteredList[0].created.Time,
      },
      deadline: filteredList[0].deadline,
      // duration: filteredList[0].duration,
      priority: filteredList[0].priority,
    };

    console.log("body received filtered list ".toUpperCase(), untouchedList);
    console.log("new list ".toUpperCase(), newList);
    dispatch(addTask([...untouchedList, newList]));
  };

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
