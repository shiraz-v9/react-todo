export function Priority({ type }: any) {
  var colorfulDots = "";
  if (type === "low") {
    //do something
    colorfulDots = "🔵";
  } else if (type === "medium") {
    //do something
    colorfulDots = "🟡";
  } else if (type === "high") {
    //do something
    colorfulDots = "🔴";
  } else {
    colorfulDots = "";
  }
  return <p className="priorityDot">{colorfulDots}</p>;
}
