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
    if (task.deadline !== "" && task.deadline !== undefined)
      return (
        <span>
          in{" "}
          {parseInt(format(new Date(task.deadline), "dd")) -
            parseInt(format(new Date(), "dd"))}{" "}
          days
        </span>
      );
    else {
      return <span></span>;
    }
  };

  return (
    <>
      <div className="mt-2 taskRow" onClick={handleDeets}>
        <div className="w-100 mx-2 taskRow">
          <div className="d-flex flex-nowrap align-items-start">
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
          <div className="d-flex flex-nowrap justify-content-center">
            <p className="me-2">
              <Due />
            </p>
            <Priority type={task.priority} />
          </div>
        </div>
      </div>
    </>
  );
}
