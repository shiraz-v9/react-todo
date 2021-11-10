import "../Style/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import { RBC_Event } from "../components/interfaces";

function MyCalendar() {
  const { deadlines } = useSelector((state: RootState) => state.reduxTask);
  const locale = momentLocalizer(moment);
  var events: RBC_Event[] = [];

  if (deadlines !== []) {
    deadlines.forEach((item, index, arr) => {
      var Day = parseInt(moment(arr[index].deadline).format("DD"));
      var Year = parseInt(moment(arr[index].deadline).format("YYYY"));
      var Month = parseInt(moment(arr[index].deadline).format("MM"));
      console.log("DEADLINES RUNNING ", Day);
      events = [
        ...events,
        {
          title: arr[index].task,
          allDay: true,
          start: new Date(Year, Month - 1, Day),
          end: new Date(Year, Month - 1, Day),
        },
      ];
    });
  }

  return (
    <Calendar
      // view="month"
      localizer={locale}
      events={events}
      startAccessor="start"
      endAccessor="end"
      // onSelectEvent={() => console.log("hello world")}
      style={{
        height: "auto",
        width: "1200px",
        marginLeft: "10px",
        marginTop: "10px",
      }}
    />
  );
}

export default MyCalendar;
