import React from "react";
import { Checkbox } from "./checkbox";
import { ITask } from "./interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="eachTask taskRow">
      <div className="taskRow">
        <p>{task.task}</p>
        <p>{task.deadline}</p>
      </div>
      <button
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
