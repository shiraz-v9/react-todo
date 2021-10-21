interface prop {
  count?: number | 0;
}

function BadgeCount({ count }: prop) {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center "
      style={{
        backgroundColor: "red",
        width: "50px",
        height: "30px",
        borderRadius: "50px",
      }}
    >
      <h3 className="mb-0">{count}</h3>
    </div>
  );
}

export default BadgeCount;
