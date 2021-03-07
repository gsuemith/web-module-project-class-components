import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }

  addTodo = (task) => {
    this.setState({data: [...this.state.data, task]})
  }

  markComplete = id => {
    const newList = this.state.data.map(item => {
      if(item.id === id){
        return {...item, completed: !item.completed}
      }

      return item;
    })

    this.setState({data: newList})
  }

  clearCompleted = () => {
    const newList = this.state.data.filter(item => {
      return !item.completed
    })

    this.setState({data: newList})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.data} 
          checkOff={this.markComplete}
        />
        <TodoForm add={this.addTodo} clear={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
