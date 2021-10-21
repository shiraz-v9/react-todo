import { Homepage } from "./components/Homepage";
import IconBar from "./components/iconbar";
import { Sidebar } from "./components/Sidebar";
// import { Taskdeets } from "./components/Taskdeets";

function App() {
  return (
    <div className="App">
      <div className="container">
        <IconBar />
        <Sidebar />
        <Homepage />
        {/* <Taskdeets content={(value: idProp) => value} /> */}
      </div>
    </div>
  );
}

export default App;
