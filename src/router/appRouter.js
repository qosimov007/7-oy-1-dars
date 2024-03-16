import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "../components/headerComponents/Header";
import UserDashboard from "../components/userComponents/UserDashboard";
import AddTask from "../components/taskComponents/addTask/AddTask";
import ProjectDashboard from "../components/projectComponents/ProjectDashboard";
import ViewTask from "../components/taskComponents/viewTask/ViewTask";

export default () => (
  <BrowserRouter>
     <div className="container">
                 <div className="row">
                 <div className="col-sm-1"></div>
                 <div className="col-sm-10">
      <Header />
      <Switch>
        <Route path="/user" component={UserDashboard} />
        <Route path="/project" component={ProjectDashboard} />
        <Route path="/AddTask" component={AddTask} />
        <Route path="/ViewTask" component={ViewTask} />
        <Route component={() => <Redirect to={"/user"} />} />
      </Switch>
    </div>
    <div className="col-sm-1"></div>
    </div>
    </div>
  </BrowserRouter>
);
