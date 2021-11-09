import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lungo } from "../Redux/counter";
import { addTask, taskDeadline } from "../Redux/task";
import { RootState } from "../Redux/store";
import { Input } from "./Input";
import { ITask } from "./interfaces";
import { TaskBody } from "./taskBody";
import BadgeCount from "./badgeCount";
import moment from "moment";

export function TaskHead() {
  // var parsedLS:any = JSON.parse(localStorage.getItem("listArray"));
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [testtt, settesttt] = useState();

  const { inbox } = useSelector((state: RootState) => state.counter);
  const { list, smartlist, deadlines } = useSelector(
    (state: RootState) => state.reduxTask
  );
  const dispatch = useDispatch();

  useEffect((): void => {
    if (task !== "") {
      setTodoList([
        ...todoList,
        {
          task: task,
          id: CreateID(),
          created: moment().format("dddd, MMMM Do YYYY"),
          createdTime: moment().format("h:mm:ss a"),
          deadline: moment(date).format("DD/MM/YYYY"),
          priority: priority,
        },
      ]);

      //Redux global state
      dispatch(
        addTask([
          ...todoList,
          {
            task: task,
            id: CreateID(),
            created: moment().format("dddd, MMMM Do YYYY"),
            createdTime: moment().format("h:mm:ss a"),
            deadline: moment(date).format("DD/MM/YYYY"),
            priority: priority,
          },
        ])
      );
      // if (date !== "") {
      //   dispatch(taskDeadline(todoList));
      // }
      setTask("");
      // setDate("");
    }
  }, [task]);

  useEffect(() => {
    dispatch(lungo(list.length));

    dispatch(
      taskDeadline(
        todoList.filter((task) => {
          return (
            task.deadline !== undefined &&
            task.deadline !== "Invalid date" &&
            task.deadline !== ""
          );
        })
      )
    );
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
