import { useState, useEffect, ChangeEvent, FormEvent } from "react";
export function Input(props: any) {
  const [input, setInput] = useState<string>("");

  const HandleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);

    // useEffect(() => {
    //   console.log(task);
    // }, [todoList]);
  };

  const handleSubmission = (event: any) => {
    event.preventDefault();
    // props.change(event.target.value);
    props.sub(input);
  };

  return (
    <div className="sticky">
      <div className="t-container taskRow">
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            value={input}
            onChange={(event) => {
              {
                // props.change(event.target.value);
                setInput(event.target.value);
              }
            }}
            placeholder="add a task..."
          />
          {/* <Date /> */}
          {/* <PriorityDot /> */}
          <button
            type="submit"
            // onClick={() => {
            //   // setTask(input);
            //   // setDealine(0);
            // }}
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
}

// export function Date() {
//   return (
//     <div>
//       <button>date</button>
//     </div>
//   );
// }

// export function PriorityDot() {
//   return (
//     <div>
//       <button>Priority</button>
//     </div>
//   );
// }
