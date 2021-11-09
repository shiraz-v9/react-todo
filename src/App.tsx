import { TaskHead } from "./components/taskHeader";
import IconBar from "./components/iconbar";
import { Sidebar } from "./components/Sidebar";
import { Taskdeets } from "./components/Taskdeets";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyCalendar from "./components/calendar";
import Settings from "./components/settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="mainContainer">
            <div className="container">
              <IconBar />
              <Sidebar />
              <TaskHead />
              <Taskdeets />
            </div>
          </div>
        </Route>
        <Route exact path="/calendar">
          <div className="mainContainer">
            <div className="container">
              <IconBar />
              <MyCalendar />
            </div>
          </div>
        </Route>
        <Route exact path="/settings">
          <div className="mainContainer">
            <div className="container">
              <IconBar />
              <Settings />
            </div>
          </div>
        </Route>
        <Route
          path="/"
          render={() => (
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h1>404 Not Found ⛔</h1>
              <p className="mt-3">are you lost?</p>
              <a href="/">home</a>
              <a href="/calendar">calendar</a>
            </div>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
