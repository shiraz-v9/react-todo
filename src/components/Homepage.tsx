import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import data from "./data.json";
import { Checkbox, Checkboxed } from "./checkbox";
import { Input } from "./Input";
import { ITask } from "./interfaces";
import TodoTask from "./todoTask";
export function Homepage() {
  // const [task, setTask] = useState<ITask[]>([]);
  // const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  useEffect((): void => {
    // setTask(input);
    setTodoList([{ task: "boom", deadline: 0 }]);
  }, []);

  useEffect((): void => {
    console.log(task);
    setTodoList([...todoList, { task: task, deadline: 0 }]);
  }, [task]);

  // const DropBox = (id: any, obj: Task) => {
  //   if (task[id].completed === true) {
  //     return (
  //       <div onClick={() => Completion(id, false, obj)}>
  //         <Checkboxed col="black" />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div onClick={() => Completion(id, true, obj)}>
  //         <Checkbox col="black" />
  //       </div>
  //     );
  //   }
  // };
  // interface prop {
  //   id: number;
  //   bool: boolean;
  //   obj: Task;
  // }
  // const Completion = (props: prop) => {
  //   if (props.bool === true) {
  //     var json: Task = {
  //       userId: props.obj.userId,
  //       id: props.id,
  //       title: props.obj.title,
  //       body: props.obj.body,
  //       time: props.obj.time,
  //       priority: props.obj.priority,
  //       completed: props.bool,
  //     };
  //     // var array = task;
  //     // array.splice(id, 1, json);
  //     // console.log("array ", array);

  //     setTask([...task, json]);
  //   } else if (props.bool === false) {
  //     var json: Task = {
  //       userId: 1,
  //       id: props.id,
  //       title: "eggs",
  //       body: "just a body",
  //       time: "today",
  //       priority: "low",
  //       completed: false,
  //     };
  //     setTask([...task, json]);
  //   }
  // };

  function Priority({ type }: any) {
    var colorfulDots = "";
    if (type === "low") {
      //do something
      colorfulDots = "🟢";
    } else if (type === "medium") {
      //do something
      colorfulDots = "🟡";
    } else if (type === "high") {
      //do something
      colorfulDots = "🔴";
    } else {
      colorfulDots = "";
    }
    return <p className="priorityDot eachTask">{colorfulDots}</p>;
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task != taskNameToDelete;
      })
    );
  };

  function List() {
    const list = todoList.map((tasks: ITask, index: number) => (
      <div className="hoverable" key={index}>
        <div className="w-100">
          <TodoTask key={index} task={tasks} completeTask={completeTask} />
          {/* <DropBox id={index} obj={tasks} /> */}
          {/* {console.log(tasks.id, "- index - ", index)} */}
          {/* {Completion()} */}
          {/* <div className="d-flex flex-nowrap flex-fill flex-row justify-content-between align-items-center"> */}
          {/* <p className="eachTask">{tasks.title}</p>
            <div className="d-flex flex-nowrap flex-row">
              <p className="eachTask">{tasks.time}</p> */}
          {/* <Priority type={tasks.priority} /> */}
          {/* </div> */}
          {/* </div> */}
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
          // change={(value: any) => setTask(value)}
          sub={(value: any) => setTask(value)}
        />
      </div>
      <List />
    </div>
  );
}
