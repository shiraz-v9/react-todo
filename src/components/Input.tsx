import { useState, useEffect, ChangeEvent, FormEvent } from "react";
export function Input(props: any) {
  var priority = ["none", "low", "medium", "high"];
  const [input, setInput] = useState<string>("");
  const [fired, setfired] = useState<number>(0);
  const [select, setSelect] = useState<string>(priority[fired]);
  // const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSelect(event.target.value);
  // };

  const handleSubmission = (event: any) => {
    event.preventDefault();
    props.sub(input);
    props.select(select);
    setInput("");
  };

  const arrowzino = (e: any) => {
    if (e.keyCode === 38 && fired >= 0 && fired <= 2) {
      setfired(fired + 1);
      console.log("⬇", fired);
      // setSelect(priority[fired]);
    } else if (e.keyCode === 40 && fired >= 0 && fired <= 2) {
      setfired(fired - 1);
      console.log("⬆", fired);
    }
    setSelect(priority[fired]);
    console.log(priority[fired]);
  };

  return (
    <div className="inputBorder">
      <div className="w-100 ">
        <form onSubmit={handleSubmission}>
          <div className="taskRow">
            <input
              className="ms-2"
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
            {/* <select name="select" onChange={handleSelect}>
              <option value="none">{select}</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select> */}
            <p className="mx-2">{select}</p>

            <button className="me-2" type="submit">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
