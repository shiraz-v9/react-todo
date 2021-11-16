import { Checkbox } from "./checkbox";
import { ITask } from "./interfaces";
import { Priority } from "./priority";

interface Props {
  task: ITask;
  finishTask(taskNameToDelete: string, id: string): void;
  idProp(id: string): void;
  // runModal(task: ITask): void;
}

const TodoTask = ({ task, finishTask, idProp }: Props) => {
  return (
    <div className="mt-2 taskRow">
      <div className="w-100 mx-2 taskRow">
        <div className="d-flex flex-nowrap align-items-start">
          <button
            className="checkBtn"
            onClick={() => {
              finishTask(task.task, task.id);
            }}
          >
            <Checkbox col="#004A8F" />
          </button>
          <p onClick={() => idProp(task.id)}>{task.task}</p>
        </div>
        <div className="d-flex flex-nowrap justify-content-center">
          <p className="me-2">{task.deadline}</p>
          <Priority type={task.priority} />
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
