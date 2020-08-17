import React from "react";
import ReactDOM from "react-dom";
import "./style/App.css"

import TodoApp from "./components/TodoApp"
const element = <h1>Hello from VNTALKING 1</h1>;
const root = document.getElementById("root");
const todoApp = <TodoApp />;
ReactDOM.render(todoApp, root);
