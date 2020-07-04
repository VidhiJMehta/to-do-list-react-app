/*
* Author: Vidhi Mehta
* Date: July 2020
* Purpose: A simple to-do list web-application made with React and Material-UI. 
*/

//importing stuff
import React, {Component, useState} from 'react'
import uuid from 'uuid'

//importing user components
import Todos from './components/Todos.js'
import AddTodo from './components/AddTodo.js'

//importing CSS documents
import './App.css'
import {Typography} from '@material-ui/core';


//sample todos that the app starts off with
const initialTodos= [
  {
    id: uuid.v4(), 
    title: 'Task 1',
    completed: false
  },
  {
    id: uuid.v4(),
    title: "Task 2",
    completed: false,
  },
  {
    id: uuid.v4(),
    title: 'Task 3',
    completed: false,
  }
]
//function App component
const App = () => {
  //todos is now a state variable
  const [todos, setTodos] = useState(initialTodos);

//when the checkbox is changed, 
const toggleComplete = (id) => {
  var temp = todos;
  
   temp.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;}
    })
    setTodos(temp);
  }

//when the Add button is clicked, this function adds the new TodoItem to the todos state variable
const addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  setTodos([...todos,newTodo]);
}

//when the bin icon is clicked, this function removes the task from the list of todos.
const deleteTodo = (id) => {
  var todosUpdated =[];
  setTodos(todosUpdated = [...todos.filter(todo => todo.id !== id)])
}

const onChange = (key, updatedText) => {
  //console.log ("here the key is" + key + " and the updated tect is: " + updatedText);
  var updateTodos = todos;
  
    updateTodos.map(todo => {
      if(todo.id === key){
        todo.title = updatedText;}
    })
    setTodos(updateTodos);
}

const deleteSelected = () => {
  var deleteSelectedTodos = [];
  
  todos.map(todo => {
    if(!todo.completed){
      deleteSelectedTodos.push(todo);
    }
  })
  setTodos(deleteSelectedTodos);
}

const deleteAll = () => {
  var deletedTodos = [];
  setTodos(deletedTodos);
}

// the App component returns the addTodo and Todos objects. 
return(
  <div className="todo-list"> 
    <header>
      <AddTodo 
      addTodo= {addTodo}
      deleteSelected= {deleteSelected}
      deleteAll= {deleteAll}
      />
      <Todos 
        todoList={todos} 
        toggleComplete={toggleComplete} 
        delTodo={deleteTodo} 
        onChange={onChange}/>

    </header>
  </div>
  );
}

export default App;