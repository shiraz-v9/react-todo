import { Homepage } from "./components/Homepage";
import IconBar from "./components/iconbar";
import { Sidebar } from "./components/Sidebar";
import { Taskdeets } from "./components/Taskdeets";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyCalendar from "./components/cal/calendar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <IconBar />
            <Sidebar />
            <Homepage />
            <Taskdeets />
          </div>
        </Route>
        <Route exact path="/calendar">
          <div className="container">
            <IconBar />
            <MyCalendar />
          </div>
        </Route>
        <Route
          path="/"
          render={() => (
            <div className="d-flex flex-column align-items-center mt-5">
              <h1>404 Not Found ⛔</h1>
              <p>are you lost?</p>
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
