import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../navbar";
import { AboutPage } from "../pages/AboutPage";
import { TodosPage } from "../pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Redirect exact from="/" to="/todos" />

          <Route path="/todos">
            <TodosPage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
