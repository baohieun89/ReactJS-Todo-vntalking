import React from "react";

import Header from "./layout/Header";
import Todos from "./Todos"
class TodoApp extends React.Component{
    state = {
        todos:[
            {
                id: 1,
                title: "setup development enviroment",
                complete: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                complete: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                complete: false
            }
        ]
    };
    render() {
        return(
            <div className="container">
                <Header />
                <Todos todos={this.state.todos} />
                
            </div>
        );
    }
}
export default TodoApp;