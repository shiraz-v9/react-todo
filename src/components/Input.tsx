import { useState, useEffect, ChangeEvent, FormEvent } from "react";
export function Input(props: any) {
  const [input, setInput] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const handleSubmission = (event: any) => {
    event.preventDefault();
    props.sub(input);
    props.select(select);
    setInput("");
  };

  return (
    <div className=" inputBorder">
      <div className="w-100 ">
        <form onSubmit={handleSubmission}>
          <div className="taskRow">
            <input
              className="ms-2"
              type="text"
              value={input}
              onChange={(event) => {
                {
                  setInput(event.target.value);
                }
              }}
              placeholder="add a task..."
            />
            <select name="boom" onChange={handleSelect}>
              <option value="none">none</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>

            <button className="me-2" type="submit">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
