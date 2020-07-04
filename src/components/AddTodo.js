import React, {Component, useState} from 'react'
import {Button, TextField, Typography} from '@material-ui/core'
import Todos from './Todos.js'

class AddTodo extends Component {
   state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({title: e.target.value})
  }

  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render (){
    return (
    <div 
      style={{ 
        marginTop: "10ch",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}> 
    <header>
      <Typography variant="h3"> To-Do List </Typography>
      <form id="to-do-form">
        <TextField 
          variant="filled" 
          type="text" 
          placeholder="Enter a task"
          value= {this.state.title} 
          onChange= {this.onChange}
          />
        <Button 
          variant="contained" 
          type="submit" 
          color="secondary"
          onClick={this.submit}> 
          Add 
        </Button>
        <Button 
          variant="contained" 
          type="button" 
          color="secondary"
          onClick={this.props.deleteSelected}> 
          Delete Selected 
        </Button>
        <Button 
          variant="contained" 
          type="button" 
          color="secondary"
          onClick= {this.props.deleteAll}> 
          Delete All 
        </Button>
      </form> 
    </header>
  </div>
  )
  }
}

export default AddTodo
