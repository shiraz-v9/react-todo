import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setInbox, upcoming, setToday, setTomorrow } from "../Redux/task";
import BadgeCount from "./badgeCount";

// import { pop } from "./media/pop.mp3";
const pop = require("./media/pop.mp3");

// let audio = new Audio(pop);
export function Sidebar() {
  const { inbox } = useSelector((state: RootState) => state.counter);
  const { smartlist } = useSelector((state: RootState) => state.reduxTask);
  const dispatch = useDispatch();
  return (
    <div className="devborders sidebar">
      <div className="d-flex flex-row justify-content-between align-content-baseline mb-3 taskBadge">
        <h3 className="me-3">{smartlist}</h3>
        <BadgeCount count={inbox} />
      </div>
      <div className="d-flex flex-column align-items-center">
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
        {/* <button
          className="mb-1 btntt"
          onClick={() => {
            dispatch(setTomorrow());
          }}
        >
          Tomorrow
        </button> */}
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
