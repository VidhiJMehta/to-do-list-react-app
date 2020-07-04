import React, { Component, makeStyles }from 'react';
import {Checkbox, IconButton, Typography, ListItem, ListItemText, TextField} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccd dotted',

        }
    }

    onChange = (e) => {
        this.props.todo.title = e.target.valu;
    }

    render() {
        return (
            <div className="List" style={this.getStyle()}>
                <ListItem key={this.props.todo.id}>
                    <Checkbox 
                    color="primary" 
                    inputProps={{ 'aria-label': 'checkbox with default color' }} 
                    onChange= {this.props.toggleComplete.bind(this, this.props.todo.id)} 
                    float= "left" />
                    <ListItemText> 
                        <TextField 
                        type="text" 
                        id={this.props.todo.id} 
                        defaultValue={this.props.todo.title}
                        min-width="170px"
                        border= "0"
                        InputProps= {{disableUnderline: true}}
                        onChange= { (e) => {this.props.onChange(this.props.todo.id, e.target.value)}}
                        > 
                        </TextField> 
                    </ListItemText>
                    <IconButton 
                    onClick={this.props.delTodo.bind(this, this.props.todo.id)}
                    aria-label="delete" className="Something" style= {{float:"right"}}>
                    <DeleteIcon fontSize="small" color="secondary"/>
                    </IconButton>
                </ListItem>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
