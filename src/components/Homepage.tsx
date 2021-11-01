import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lungo } from "../Redux/counter";
import { addTask } from "../Redux/task";
import { RootState } from "../Redux/store";
import { Input } from "./Input";
import { ITask } from "./interfaces";
import { TaskBody } from "./taskBody";
import BadgeCount from "./badgeCount";

export function Homepage() {
  // var parsedLS:any = JSON.parse(localStorage.getItem("listArray"));
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("inbox");
  const [priority, setPriority] = useState<string>("");

  const { inbox } = useSelector((state: RootState) => state.counter);
  const { list, smartlist } = useSelector(
    (state: RootState) => state.reduxTask
  );
  const dispatch = useDispatch();

  useEffect((): void => {
    // let parsedLS: any = localStorage.getItem("listArray");
    if (task !== "") {
      setTodoList([
        ...todoList,
        { task: task, id: CreateID(), deadline: deadline, priority: priority },
      ]);

      //Redux global state
      dispatch(
        addTask([
          ...todoList,
          {
            task: task,
            id: CreateID(),
            deadline: deadline,
            priority: priority,
          },
        ])
      );

      setTask("");
    }
  }, [task]);

  useEffect(() => {
    // localStorage.setItem("listArray", JSON.stringify(list));
    dispatch(lungo(list.length));
  }, [list]);

  const CreateID = (): number => {
    var count = todoList.length + 1;
    return count;
  };

  const finishTask = (taskNameToDelete: string, id: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id != id;
      })
    );
    dispatch(
      addTask(
        todoList.filter((task) => {
          return task.id != id;
        })
      )
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

  function Task() {
    const mylist = list.map((tasks: ITask, index: number) => (
      <div className="hoverable" key={index}>
        <div className="w-100">
          <TaskBody
            key={index}
            task={tasks}
            finishTask={finishTask}
            idProp={updateTask}
            // active={show}
            obj={list}
            id={index}
          />
        </div>
      </div>
    ));
    return <>{mylist}</>;
  }

  return (
    <div className="devborders mainTask">
      <div className="sticky">
        <div className="d-flex flex-row flex-start align-items-center">
          <h1 className="me-3">{smartlist}</h1>
          <BadgeCount count={inbox} />
        </div>

        <Input
          sub={(value: any) => setTask(value)}
          select={(value: any) => setPriority(value)}
        />

        <button
          className="mt-2 btntt"
          onClick={() => {
            console.log(list);
            console.log(inbox);
            // console.log(parsedLS);
          }}
        >
          REDUX LOG
        </button>
      </div>
      <Task />
    </div>
  );
}
