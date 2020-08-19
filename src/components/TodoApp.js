import React from "react";
import uuid from "uuid"
import Header from "./layout/Header";
import Todos from "./Todos"
import AddTodo from "./AddTodo"
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
	handleCheckboxChange = id => {
		
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id){
					todo.complete = !todo.complete;
					
				}
				return todo;
			})
		});
	}
	deleteTodo = id =>{
		console.log ("deleted", id);
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		});
	}
	addTodo = title => {
		console.log(title);
		const newTodo = {
			id: uuid.v4(),
			title: title,
			complete: false
		};
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}
	render() {
		
		return(
			<div className="container">
				<Header />
				<AddTodo  addTodo={this.addTodo}/>
				<Todos todos={this.state.todos} handleChange= {this.handleCheckboxChange} deleteTodo = {this.deleteTodo} />
				
			</div>
		);
	}
}
export default TodoApp;