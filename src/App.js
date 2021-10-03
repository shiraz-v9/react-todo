import { Homepage } from "./components/Homepage";
import { Sidebar } from "./components/Sidebar";
import { Taskdeets } from "./components/Taskdeets";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Homepage />
        <Taskdeets />
      </div>
    </div>
  );
}

export default App;
