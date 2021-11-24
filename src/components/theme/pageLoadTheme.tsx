import { format } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { addTask } from "../../Redux/task";
import { ITask } from "../interfaces";
import Theme from "./theme";

export function PageLoadTheme() {
  useEffect(() => {
    let ls = localStorage.getItem("appTheme");
    if (ls !== undefined && ls !== null) {
      Theme(ls);
    }
  }, []);
  return null;
}

export function CheckLS() {
  const dispatch = useDispatch();
  useEffect(() => {
    let ls = localStorage.getItem("tasks");
    if (ls !== undefined && ls !== null) {
      dispatch(addTask(JSON.parse(ls)));
    }
  }, []);
  return null;
}

export function SwitchList() {
  const dispatch = useDispatch();
  const { smartlist } = useSelector((state: RootState) => state.reduxTask);
  const { list, deadlines, completedlist } = useSelector(
    (state: RootState) => state.reduxTask
  );
  // CheckLS();
  useEffect(() => {
    let ls = localStorage.getItem("tasks");
    switch (smartlist) {
      case "inbox":
        if (ls !== null) {
          dispatch(addTask(JSON.parse(ls)));
        }
        break;
      case "today":
        let todayF = format(new Date(), "yyyy MM dd");
        console.log("switch case today", todayF);
        if (ls !== null) {
          dispatch(
            addTask(
              JSON.parse(ls).filter((x: ITask) => {
                return x.deadline === todayF;
              })
            )
          );
        }
        break;
      case "upcoming":
        if (ls !== null) {
          dispatch(
            addTask(
              JSON.parse(ls).filter((x: ITask) => {
                return x.deadline !== "";
              })
            )
          );
        }
        break;
      default:
        break;
    }
  }, [smartlist]);
  return null;
}
