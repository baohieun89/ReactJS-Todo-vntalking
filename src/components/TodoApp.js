import React from "react";
import axios from "axios"
import uuid from "uuid"
import Header from "./layout/Header";
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class TodoApp extends React.Component{
	state = {
		todos:[]
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
		// console.log ("deleted", id);
		// this.setState({
		// 	todos: [
		// 		...this.state.todos.filter(todo => {
		// 			return todo.id !== id;
		// 		})
		// 	]
		// });
		axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
				.then(response => {
					this.setState({
						todos: [
							...this.state.todos.filter(todo =>{
								return todo.id !== id;
							})
						]
					})
				})
	}
	addTodo = title => {
		console.log(title);
		// const newTodo = {
		// 	id: uuid.v4(),
		// 	title: title,
		// 	complete: false
		// };
		// this.setState({
		// 	todos: [...this.state.todos, newTodo]
		// });
		const todoData = {
			title: title,
			complete: false
		}
		axios.post("https://jsonplaceholder.typicode.com/todos",todoData)
				.then(response => {
					console.log(response.data)
					this.setState({
						todos: [...this.state.todos,response.data]
					})
				})
	}
	componentDidMount(){
		//Giới hạn số lượng data trả về ( mục đích phân trang hoặc đơn giản chỉ lấy it data demo)
		// cách 1 axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
		//cách 2 *recommend*
		const config = {
			params: {
				_limit: 5
			}
		}

		//tạo Get request để lấy danh sách todos
		axios.get("https://jsonplaceholder.typicode.com/todos",config)
				.then(response => this.setState({ todos: response.data}));
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