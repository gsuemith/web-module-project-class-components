import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
  onClick = e => {
    this.props.checkOff(this.props.todo.id)
  }

  render() {
    return (
      <div 
        className={this.props.todo.completed ? "completed":""}
        onClick={this.onClick}
      >
        {this.props.todo.task}
      </div>
    )
  }
}

export default Todo
