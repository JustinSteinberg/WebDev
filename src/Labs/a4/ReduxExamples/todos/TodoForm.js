import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {addTodo, updateTodo, setTodo} from "./todosReducer"

function TodoForm() {
    const {todo} = useSelector((state)=> state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        <button onClick={() => dispatch(addTodo(todo))}> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}> Update </button>
        <input
          type="text"
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
        />
      </li>
    );
  }
  export default TodoForm;