import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lungo } from "../Redux/counter";
import { addTask, taskDeadline } from "../Redux/task";
import { RootState } from "../Redux/store";
import { Input } from "./Input";
import { ITask } from "./interfaces";
import { TaskBody } from "./taskBody";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import { setID } from "../Redux/task";

export function TaskHead() {
  // const [todoList, setTodoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [date, setDate] = useState<Date | string>();

  const { inbox } = useSelector((state: RootState) => state.counter);
  const { list, deadlines } = useSelector(
    (state: RootState) => state.reduxTask
  );
  const dispatch = useDispatch();

  useEffect((): void => {
    if (task !== "") {
      //Redux global state
      dispatch(
        addTask([
          ...list,
          {
            task: task,
            id: nanoid(),
            created: {
              Day: format(new Date(), "dd/LL/yyyy"),
              Time: format(new Date(), "hh:mm aaa"),
            },
            deadline: date,
            priority: priority,
          },
        ])
      );

      setTask("");
      // setDate(new Date());
    }
  }, [task]);

  useEffect(() => {
    dispatch(lungo(list.length));

    dispatch(
      taskDeadline(
        list.filter((task) => {
          return (
            task.deadline !== undefined &&
            task.deadline !== null &&
            task.deadline !== ""
          );
        })
      )
    );
  }, [list]);

  const finishTask = (taskNameToDelete: string, id: string): void => {
    dispatch(
      addTask(
        list.filter((task) => {
          return task.id !== id;
        })
      )
    );
    dispatch(setID(undefined));
  };

  const updateTask = (id: string) => {
    var filt = list.filter((task) => {
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
            // idProp={updateTask}
            // active={show}
            obj={list}
            id={tasks.id}
          />
        </div>
      </div>
    ));
    return <>{mylist}</>;
  }

  return (
    <div className="devborders mainTask">
      <div className="sticky">
        <Input
          sub={(value: any) => setTask(value)}
          select={(value: any) => setPriority(value)}
          date={(value: any) => setDate(value)}
        />

        <button
          className="mt-2 btntt"
          onClick={() => {
            console.log("LIST -", list);
            console.log("INBOX -", inbox);
            console.log("EVENTS -", deadlines);
          }}
        >
          REDUX LOG
        </button>
      </div>
      <Task />
    </div>
  );
}
