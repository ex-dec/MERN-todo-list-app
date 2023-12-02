import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import DeleteTodo from "./components/delete-todo.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" alt="logo" />
              </a>
              <Link to="/" className="navbar-brand">
                Todo-list app
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav ml-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">
                      Todos
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">
                      Create
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
