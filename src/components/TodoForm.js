import React, { Component } from 'react'

export class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
    }
  }

  onChange = e => {
    this.setState({task: e.target.value})
  }

  addTodo = e => {
    if(this.state.task === '')
      return;
    
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.props.add(newTask)
    this.setState({task: ''})
  }

  render() {
    return (
      <div>
        <input 
          placeholder="New Task?" 
          value={this.state.task}
          onChange={this.onChange}
        />
        <button onClick={this.addTodo}>Add Task</button>
        <button onClick={this.props.clear}>Delete Completed</button>
      </div>
    )
  }
}

export default TodoForm
