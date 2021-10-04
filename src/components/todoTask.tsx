import React from "react";
import { Checkbox } from "./checkbox";
import { ITask } from "./interfaces";
import { Priority } from "./priority";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="taskRow">
      <div className="w-100 mx-2 taskRow">
        <p>{task.task}</p>
        <div className="d-flex flex-nowrap align-items-end">
          <p className="me-2">{task.deadline}</p>
          <Priority type={task.priority} />
        </div>
      </div>
      <button
        className="checkBtn"
        onClick={() => {
          completeTask(task.task);
        }}
      >
        <Checkbox />
      </button>
    </div>
  );
};

export default TodoTask;
