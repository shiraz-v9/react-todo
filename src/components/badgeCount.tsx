interface prop {
  count?: number | 0;
}

function BadgeCount({ count }: prop) {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center "
      style={{
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue("--button"),
        width: "40px",
        height: "30px",
        margin: "5px",
        borderRadius: "20px",
      }}
    >
      <h4 className="mb-0">{count}</h4>
    </div>
  );
}

export default BadgeCount;
