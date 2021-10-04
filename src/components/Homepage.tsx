import { useState, useEffect } from "react";
import data from "./data.json";

import { Input } from "./Input";
import { ITask } from "./interfaces";
import TodoTask from "./todoTask";

export function Homepage() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("inbox");
  const [priority, setPriority] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  useEffect((): void => {
    setTodoList([{ task: "new task", deadline: deadline, priority: priority }]);
  }, []);

  useEffect((): void => {
    console.log(task);
    if (task !== "") {
      setTodoList([
        ...todoList,
        { task: task, deadline: deadline, priority: priority },
      ]);
      setTask("");
    }
  }, [task]);

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task != taskNameToDelete;
      })
    );
  };

  function Task() {
    const list = todoList.map((tasks: ITask, index: number) => (
      <div className="hoverable" key={index}>
        <div className="w-100">
          <TodoTask key={index} task={tasks} completeTask={completeTask} />
        </div>
      </div>
    ));
    return <div>{list}</div>;
  }

  return (
    <div className="devborders mainTask">
      <div className="sticky">
        <h1 className="title">Tasks</h1>
        <Input
          sub={(value: any) => setTask(value)}
          select={(value: any) => setPriority(value)}
        />
      </div>
      <Task />
    </div>
  );
}
