import { useDispatch } from "react-redux";
import { setInbox, upcoming, setToday, setTomorrow } from "../Redux/task";

// import { pop } from "./media/pop.mp3";
const pop = require("./media/pop.mp3");

// let audio = new Audio(pop);
export function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="devborders sidebar">
      <div className="mt-2 d-flex flex-row justify-content-between">
        <img
          className="userlogo"
          src="https://avatars.githubusercontent.com/u/56916252?s=400&u=b3a44d3503034ca35fae58c2c1ba461746ed0e5c&v=4"
          alt="userlogo"
          height="40"
          width="40"
        />

        <svg
          onClick={() => console.log("settings")}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-gear-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </div>
      <h3 className="mt-2">smart list</h3>
      <div className="d-flex flex-column">
        <button
          className="mb-1 btntt btnttActive"
          onClick={() => {
            dispatch(setInbox());
          }}
        >
          Inbox
        </button>
        <button
          className="mb-1 btntt"
          onClick={() => {
            dispatch(setToday());
          }}
        >
          Today
        </button>
        <button
          className="mb-1 btntt"
          onClick={() => {
            dispatch(setTomorrow());
          }}
        >
          Tomorrow
        </button>
        <button
          className="mb-1 btntt"
          onClick={() => {
            dispatch(upcoming());
          }}
        >
          Upcoming
        </button>
      </div>
    </div>
  );
}
