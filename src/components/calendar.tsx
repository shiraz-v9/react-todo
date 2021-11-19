import "../Style/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import { RBC_Event } from "../components/interfaces";
import { format } from "date-fns";
// import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUK from "date-fns/locale/en-GB";

function MyCalendar() {
  const { deadlines } = useSelector((state: RootState) => state.reduxTask);
  var events: RBC_Event[] = [];
  const locales = {
    "en-GB": enUK,
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  if (deadlines !== []) {
    deadlines.forEach((item, index, arr) => {
      events = [
        ...events,
        {
          title: arr[index].task,
          allDay: true,
          start: arr[index].deadline,
          end: arr[index].deadline,
        },
      ];
    });
  }

  return (
    <div className="calendarWrapper">
      <Calendar
        // view="month"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // onSelectEvent={() => console.log("hello world")}
        style={{
          padding: "20px",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default MyCalendar;
