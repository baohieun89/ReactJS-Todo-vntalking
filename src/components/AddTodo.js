import React, {useState}from "react"
//----USE CLASS
// class AddTodo extends React.Component{
// 	state = {
// 		title :""
// 	};
// 	onInputChange = e =>{
// 		this.setState({
// 			title: e.target.value
// 		});
// 	};
// 	addTodo = e => {
// 		e.preventDefault();
// 		//console.log(this.state.title);
// 		this.props.addTodo(this.state.title);
// 		this.setState({
// 			title:""
// 		});
// 	};
// 	render(){
// 		return (
// 			<form action="" className="form-container"  onSubmit={this.addTodo}>
// 				<input type="text" placeholder="Add Todo..." className="input-text" value={this.state.title} onChange={this.onInputChange}/>
// 				<input type="submit" value="Submit" className="input-submit"/>
// 			</form>
// 		);
// 	}
// }


//---_USE HOOK
function AddTodo(props){
  const [title, setTitle] = useState("");
  const onInputChange = e => {
    setTitle(e.target.value)
  };
  const addTodo = e => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("")
  };

return(
  <form onSubmit={addTodo} className="form-container">
    <input
      type="text"
      placeholder="Add todo..."
      className="input-text"
      value={title}
      onChange={onInputChange}
    />
    <input type="submit" className="input-submit"/>
  </form>
)
}
export default AddTodo