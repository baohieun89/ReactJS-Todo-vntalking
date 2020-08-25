import React, { useState } from "react";

function Addtodo(props){
  const [title, setTitle] = useState("");
  const onInputChange = e => {
    setTitle(e.target.value)
  };
  const addTodo = e => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("")
  };
}
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

export default AddTodoHook;