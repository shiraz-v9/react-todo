export function Sidebar() {
  return (
    <div className="devborders sidebar">
      <h1 className="sticky title">Sidebar</h1>
      <h3>smart list</h3>
      <div className="d-flex flex-column">
        <button className="mb-1">inbox</button>
        <button className="mb-1">today</button>
        <button className="mb-1">upcoming 7</button>
        <button className="mb-1">tomorrow</button>
      </div>

      <h3>lists</h3>
    </div>
  );
}
