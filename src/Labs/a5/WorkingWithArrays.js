import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        //description: "Create a NodeJS server with ExpressJS",
        //due: "2021-09-09",
        completed: false,
      });
    
    const API = "http://localhost:4000/a5/todos";

    const [todos, setTodos] = useState([]);

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    
    const deleteTodo = async (todo) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    const updateTodo = async () => {
        const response = await axios.put(
          `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
          t.id === todo.id ? todo : t)));
        //setTodo({});
    };    

    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };

    const removeTodo = async (todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    
    const updateTitle = async () => {
        const response = await axios.get(
          `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    
    useEffect(() => {
      fetchTodos();
    }, []);
  

    return (
      <div>
        <h3>Working with Arrays</h3>
        <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title
      </button>
        <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
            Todo: <strong>ID:</strong> {todo.id} <strong>Title:</strong> {todo.title} 
            <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning me-2 float-end ms-2" >
          Edit
        </button>
            <button
            onClick={() => removeTodo(todo)}
            className="btn btn-danger float-end" >
            Remove
            </button>
            <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end me-2">
                Delete
            </button>
            <label className="ms-1"> Completed:
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            </label>
          </li>
        ))}
      </ul>
      <form>
            <label>Title:</label>
      <textarea
        onChange={(e) => setTodo({ ...todo,
          title: e.target.value })}
        value={todo.title} type="text"
      />
      <label>ID:</label>
      <input
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        value={todo.id} type="number"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} >
        Post Todo
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>

    </form>
        <label> Set ID 
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
        />
        </label>

        <h3>Setting Completed</h3>
        <label> 
        <input checked={todo.completed}
            onChange={(e) => setTodo({...todo, completed: e.target.checked})}
            className="mb-2"
            type="checkbox"
        />
        Completed Todo
        </label>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2 m-2">
                Complete Todo ID = {todo.id}
            </a>

        
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>

        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
        className="btn btn-primary me-2">
            Get Completed Todos
        </a>

        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>

      <h3>Updating an Item in an Array</h3>

      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>
      </div>
    );
  }
  export default WorkingWithArrays;