import { format } from "date-fns";
import { useState, ChangeEvent } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function Input(props: any) {
  var priority = ["none", "low", "medium", "high"];
  const [input, setInput] = useState<string>("");
  const [picker, setPicker] = useState<Date>(new Date());
  const [fired, setfired] = useState<number>(0);
  const [select, setSelect] = useState<string>(priority[fired]);
  const [date, setDate] = useState<string>("");
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const handleSubmission = (event: any) => {
    event.preventDefault();
    props.sub(input);
    props.select(select);
    props.date(date);
    setInput("");
    // setDate("");
  };

  // const arrowzino = (e: any) => {
  //   if (e.keyCode === 38 && fired >= 0 && fired <= 2) {
  //     setfired(fired + 1);
  //     console.log("⬇", fired);
  //     // setSelect(priority[fired]);
  //   } else if (e.keyCode === 40 && fired >= 0 && fired <= 2) {
  //     setfired(fired - 1);
  //     console.log("⬆", fired);
  //   }
  //   setSelect(priority[fired]);
  //   console.log(priority[fired]);
  // };

  return (
    <div className="inputBorder">
      <div className="w-100">
        <form onSubmit={handleSubmission}>
          <div className="taskRow">
            <input
              className="ms-2"
              type="text"
              value={input}
              // onKeyDown={arrowzino}
              onChange={(event) => {
                {
                  setInput(event.target.value);
                }
              }}
              placeholder="add a task..."
            />
            {/* <input
              type="date"
              className="date-picker"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              name="date-picker"
            /> */}
            <div className="d-flex justify-content-end align-items-center">
              <DatePicker
                selected={picker}
                onChange={(date: any) => {
                  var formatted = format(date, "yyyy MM dd");
                  setDate(formatted);
                  setPicker(date);
                }}
              />

              <select name="select" onChange={handleSelect}>
                <option value="none">none</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
              {/* <p className="mx-2">{select}</p> */}
              <button className="mx-2 btntt" type="submit">
                add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
