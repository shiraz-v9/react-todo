import "../Style/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import { RBC_Event } from "../components/interfaces";

const MyCalendar = () => {
  const { deadlines } = useSelector((state: RootState) => state.reduxTask);
  const locale = momentLocalizer(moment);
  var events: RBC_Event[] = [];
  if (deadlines) {
    deadlines.forEach((item, index, arr) => {
      events = [
        {
          title: deadlines[index].task,
          allDay: true,
          start: moment(deadlines[index].deadline).format("YYYY, MM DD "),
          end: moment(deadlines[index].deadline).format("YYYY, MM DD "),
        },
      ];
    });
  } else {
    events = [];
  }
  return (
    <Calendar
      view="month"
      localizer={locale}
      events={events}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={() => console.log("hello world")}
      style={{ height: "auto", width: "1200px", marginLeft: "10px" }}
    />
  );
};

export default MyCalendar;
