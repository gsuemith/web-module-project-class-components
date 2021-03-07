import Todo from './Todo'

import React, { Component } from 'react'

export class TodoList extends Component {
  

  render() {
    return (
      <div>
        {
          this.props.todoList.map(
            todo => <Todo 
                      key={todo.id} 
                      todo={todo}
                      checkOff={this.props.checkOff}
                    />
          )
        }
      </div>
    )
  }
}

export default TodoList
