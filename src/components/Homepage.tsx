import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { length } from "../Redux/counter";
import { addTask } from "../Redux/task";
import { RootState } from "../Redux/store";
import { Input } from "./Input";
import { ITask } from "./interfaces";
import { TaskModal } from "./taskBody";
// import TodoTask from "./todoTask";

export function Homepage() {
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("inbox");
  const [priority, setPriority] = useState<string>("");

  const { inbox } = useSelector((state: RootState) => state.counter);
  const { list } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();

  useEffect((): void => {
    // let type: SetStateAction<ITask[]> = localStorage.getItem("list");
    // if (type === undefined) {
    setTodoList([
      {
        task: "new task",
        id: CreateID(),
        deadline: deadline,
        priority: priority,
        body: { text: "this is body" },
      },
    ]);
    // } else if (type !== null) {
    // setTodoList(type);
    // }
  }, []);

  useEffect((): void => {
    // console.log(todoList);
    if (task !== "") {
      setTodoList([
        ...todoList,
        { task: task, id: CreateID(), deadline: deadline, priority: priority },
      ]);

      //Redux global state
      dispatch(addTask(todoList));
      dispatch(length(todoList.length));

      localStorage.setItem("list", JSON.stringify(todoList));
      setTask("");
    }
  }, [task]);

  const CreateID = (): number => {
    var count = todoList.length + 1;
    // todoList.filter((x) => {
    //   return x.id != id;
    // });
    // console.log(count);

    return count;
  };

  const finishTask = (taskNameToDelete: string, id: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id != id;
      })
    );
  };

  const updateTask = (id: number) => {
    var filt = todoList.filter((task) => {
      return task.id === id;
    });

    console.log(`id = ${id} - ${JSON.stringify(filt)} `, filt[0].task);
    return { name: filt[0].task, visibility: true };
    // return <BModal name={filt[0].task} visibility={true} />;
  };

  // const runModal = (x: ITask) => {
  //   console.log("im actually workingh ", x);

  //   return <TaskModal active={true} task={x[x.id]} />;
  // };

  function Task() {
    const list = todoList.map((tasks: ITask, index: number) => (
      <div className="hoverable" key={index}>
        <div className="w-100">
          <TaskModal
            key={index}
            task={tasks}
            finishTask={finishTask}
            idProp={updateTask}
            // active={show}
            obj={todoList}
            id={index}
          />
        </div>
      </div>
    ));
    return <>{list}</>;
  }

  return (
    <div className="devborders mainTask">
      <div className="sticky">
        <h1 className="title">Tasks {inbox}</h1>
        <Input
          sub={(value: any) => setTask(value)}
          select={(value: any) => setPriority(value)}
        />

        <button
          // aria-label="Increment value"
          onClick={() => {
            // dispatch(addTask(todoList));
            console.log(list);
          }}
        >
          get list ()
        </button>
      </div>
      <Task />
    </div>
  );
}
