import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
export default function TodoList() {
  let [Todos, setTodos] = useState([{ task: "home-work", id: uuidv4() , done : false }]);
  let [newTodo, setNewTodo] = useState("");

  // get inp value of todo

  function getInpValue(event) {
    setNewTodo(event.target.value);
  }

  // add new todo in array

  function addNewTodo() {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });

    setNewTodo("");
  }

  // delete todo

  function deleteTodo(id) {
    console.log("deleted id is", id);

    let filteredArr = Todos.filter((todo) => todo.id != id);
    setTodos(filteredArr);
  }

  // update all todo at once

  function upperCaseAll() {

    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      });
    });
  }


  function markAsDone(event){
    
    let id = event.target.value
    setTodos((prevTodo)=>{
     return prevTodo.map((todo)=>{

        if(todo.id===id){
          return {...todo , done : !todo.done}
        }

        else{
          return todo
        }


      }
      
      )
    })}


  return (  
    <div className="container">
      <h1>Todo List</h1>
      <input
        onChange={getInpValue}
        className="inp"
        type="text"
        value={newTodo}
        placeholder="Enter task"
      />
      <br /> <br />
      <button
        style={{ backgroundColor: !newTodo ? "grey" : "orange" }}
        disabled={!newTodo}
        onClick={addNewTodo}
        className="btn"
      >
        Add task
      </button>
      <br /> <br />
      <hr />
      <ul>
        {Todos.map((todo) => (
          <li style={{opacity: todo.done? 0.5 : 1 }}>
            <div className="p1">
              {todo.task}
              <input value={todo.id} className="checkbox" type="checkbox" onClick={markAsDone} />
            </div>
            <button  onClick={() => deleteTodo(todo.id)} className="btn-2">
              Delete Todo
            </button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll} className="btn3">
        Uppercase All-todo
      </button>
    </div>
  );
}
