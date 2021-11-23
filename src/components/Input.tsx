import { format } from "date-fns";
import { useState, ChangeEvent, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BadgeList } from "./Sidebar";

export function Input(props: any) {
  const [priority, setPriority] = useState<string>("none");
  const [input, setInput] = useState<string>("");
  const [picker, setPicker] = useState<Date>(new Date());
  const [fired, setFired] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };
  const [display, setDisplay] = useState<string>("date");

  const handleSubmission = (event: any) => {
    event.preventDefault();
    props.sub(input);
    props.select(priority);
    props.date(date);
    setInput("");
    setDisplay("date");
    setPriority("none");
    setFired(0);
  };

  function keycodePriority() {
    if (fired === 0) {
      setPriority("none");
    }
    if (fired === 1) {
      setPriority("low");
    }
    if (fired === 2) {
      setPriority("medium");
    }
    if (fired === 3) {
      setPriority("high");
    }
  }

  const arrowzino = (e: any) => {
    if (fired >= 0 && fired <= 3) {
      if (e.keyCode === 38) {
        setFired(fired + 1);
        keycodePriority();
        console.log("UP ", fired);
      }
      if (e.keyCode === 40) {
        setFired(fired - 1);
        keycodePriority();
        console.log("DOWN ", fired);
      }
    } else {
      console.log("OUT OF RANGE ", fired);
      fired > 3 ? setFired(fired - 1) : setFired(fired + 1);
    }
  };

  useEffect(() => {
    keycodePriority();
  }, [arrowzino]);

  return (
    <>
      <div className="hidden">
        <BadgeList />
      </div>

      <div className="inputBorder">
        <div className="w-100">
          <form onSubmit={handleSubmission} className="formInput">
            <div className="taskRow inp mx-2">
              <input
                type="text"
                value={input}
                onKeyDown={arrowzino}
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
              <div className="datePriority">
                <DatePicker
                  value={display}
                  selected={picker}
                  onChange={(date: any) => {
                    var formatted = format(date, "yyyy MM dd");
                    setDisplay(format(date, "dd MMM"));
                    setDate(formatted);
                    setPicker(new Date());
                  }}
                />

                {/* <select name="select" onChange={handleSelect}>
                <option value="none">{priority}</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select> */}
                <p>{priority}</p>

                <button className="my-auto btntt" type="submit">
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
