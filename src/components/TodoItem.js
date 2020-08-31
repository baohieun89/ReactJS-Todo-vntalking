import React from "react";
class TodoItem extends React.Component {
	render() {
		const {complete, id, title} = this.props.todo
		return (
			<li className="todo-item">
				<input 
					type="checkbox"
					checked={complete}
					onChange={() => this.props.handleChange(id)}
				/>
				<span className={complete ? "completed" : null}>
					{title}
				</span>
				<button className="btn-style" onClick={() => this.props.deleteTodo(id)}> X </button>
				<button className="btn-style" onClick= {() =>this.props.logSomething("test") }> TEST </button>
			</li>
		);
	}
}

export default TodoItem;