import React from "react";

function Theme(key: string) {
  switch (key) {
    case "light":
      document.documentElement.style.setProperty("--cards", "white");
      document.documentElement.style.setProperty("--background", "white");
      document.documentElement.style.setProperty("--font", "black");
      document.documentElement.style.setProperty("--hoverInput", "#b7b7b7");
      break;
    case "dark":
      document.documentElement.style.setProperty("--cards", "rgb(45, 45, 45)");
      document.documentElement.style.setProperty(
        "--background",
        "rgb(45, 45, 45)"
      );
      document.documentElement.style.setProperty(
        "--font",
        "rgb(206, 209, 208)"
      );
      document.documentElement.style.setProperty(
        "--hoverInput",
        "rgb(57, 57, 57)"
      );
      break;

    default:
      break;
  }
  return;
}

export default Theme;
