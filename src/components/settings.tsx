import React from "react";
import Theme from "./theme/theme";

export default function Settings() {
  return (
    <div className="devborders">
      <h1>settings</h1>
      <br />
      <button onClick={() => Theme("light")}>light</button>
      <button onClick={() => Theme("dark")}>dark</button>
    </div>
  );
}
