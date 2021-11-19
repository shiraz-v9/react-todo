import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setID } from "../Redux/task";
import { Checkbox } from "./checkbox";
import { ITask } from "./interfaces";
import { Priority } from "./priority";

interface props {
  obj: ITask[];
  task: ITask;
  id: string;
  finishTask(taskNameToDelete: string, id: string): void;
  // idProp(id: string): void;
}

export function TaskBody({ task, obj, finishTask, id }: props) {
  const dispatch = useDispatch();

  const handleDeets = () => {
    dispatch(setID(id));
    console.log("list ID ", id, " TASK ", task.task);
  };
  // const handleUpdate = () => {
  //   var updated: ITask[] = [
  //     {
  //       task: taskname,
  //       id: task.id,
  //       deadline: task.deadline,
  //       priority: task.priority,
  //       body: { text: body },
  //     },
  //   ];

  //   console.log(body, taskname);
  //   dispatch(addTask([...list, updated]));
  // };

  // var days = format(new Date(task.deadline), "dd");

  const Due = () => {
    if (task.deadline !== "" && task.deadline !== undefined) {
      var daysLeft: number =
        parseInt(format(new Date(task.deadline), "dd")) -
        parseInt(format(new Date(), "dd"));
      var day: string = "";
      var display: Boolean | undefined = undefined;
      if (daysLeft > 1) {
        day = " days";
        display = true;
      }
      if (daysLeft === 0) {
        day = " today";
        display = false;
      }
      if (daysLeft === 1) {
        day = " tomorrow";
        display = false;
      }

      return (
        <div className="littleGap">
          <p>{display === true ? daysLeft : ""}</p>
          <p>{day}</p>
        </div>
      );
    } else {
      return <span></span>;
    }
  };

  return (
    <>
      <div className="mt-2 taskRow" onClick={handleDeets}>
        <div className="w-100 mx-2 taskRow">
          <div className="d-flex flex-row flex-nowrap">
            <div
              className="checkBtn me-2"
              onClick={() => {
                finishTask(task.task, task.id);
              }}
            >
              <Checkbox col="#3e90cc" />
            </div>

            <p>{task.task}</p>
          </div>
          <div className="d-flex flex-row flex-nowrap align-items-center littleGap">
            <Due />
            <Priority type={task.priority} />
          </div>
        </div>
      </div>
    </>
  );
}
