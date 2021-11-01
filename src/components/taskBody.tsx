import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../Redux/store";
import { addTask, setID } from "../Redux/task";
import { Checkbox } from "./checkbox";
import { ITask } from "./interfaces";
import { Priority } from "./priority";

interface props {
  obj: ITask[];
  task: ITask;
  id: number;
  finishTask(taskNameToDelete: string, id: number): void;
  idProp(id: number): void;
}

export function TaskBody({ task, obj, finishTask, idProp, id }: props) {
  const [show, setShow] = useState(false);
  const [body, setbody] = useState<string>("");
  const [taskname, settaskname] = useState<string>(task.task);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { list, listID } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  const handleDeets = () => {
    dispatch(setID(id));
    console.log("list ID redux ", id, taskname);
  };
  const handleUpdate = () => {
    var updated: ITask[] = [
      {
        task: taskname,
        id: task.id,
        deadline: task.deadline,
        priority: task.priority,
        body: { text: body },
      },
    ];

    console.log(body, taskname);
    dispatch(addTask([...list, updated]));
  };

  var m = 3;

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
            <p className="me-2">{task.deadline}</p>
            <Priority type={task.priority} />
          </div>
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose} backdrop="true" keyboard={false}>
        <div className="theModal">
          <div
            className={`m-${m} d-flex justify-content-between align-items-center`}
          >
            <input
              className="modinput"
              type="text"
              value={taskname}
              onChange={(e) => settaskname(e.target.value)}
            />
            <Priority type={task.priority} />
          </div>
          <div className={`m-${m} `}>
            <textarea
              rows={4}
              className="modtxt"
              placeholder="more details here"
              onChange={(e) => {
                {
                  setbody(e.target.value);
                }
              }}
            >
              {task.body?.text}
            </textarea>
          </div>
          <div className={`m-${m} d-flex flex-row justify-content-end`}>
            <button onClick={handleClose}>Discard</button>
            <button className="ms-1" onClick={handleUpdate}>
              Save
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}
