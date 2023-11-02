import React from "react";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/ToDoList";
import { UseSelector, useSelector } from "react-redux";

function Assignment3() {
    const {todos} = useSelector((state)=> state.todosReducer);
    return (
      <div>
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <JavaScript/>
        <PathParameters/>
      </div>
    );
  }

  export default Assignment3;

  console.log("Working With Arrays");
  
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];
  
  let variableArray1 = [
     functionScoped,   blockScoped,
     constant1,        numberArray1,   stringArray1
  ];
  
  console.log('FuctionScope: ' + functionScoped, 'blockScoped: ' + blockScoped, 'constant1: ' + constant1,'numberArray1: ' + numberArray1, 'stringArray1: ' + stringArray1, 'variableArray1: ' + variableArray1)