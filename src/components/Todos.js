import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {List} from '@material-ui/core';

//import {Button, TextField} from '@material-ui/core'

class Todos extends React.Component{

    render(){
    //    console.log(this.props.todoList);
        return (
            <div>
            <List> 
            {this.props.todoList.map((todo) =>(
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={this.props.toggleComplete} 
            delTodo={this.props.delTodo}
            onChange ={this.props.onChange}
            />))}
           </List>
           </div>
        )
    }
}

/*Todos.propTypes = {
    todoList: PropTypes.array.isRequired
}*/

export default Todos;