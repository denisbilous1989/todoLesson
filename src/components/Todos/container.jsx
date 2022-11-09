import React  from 'react';

import TodoComponent from './component';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enterTodo: '',
      todos: [],
    }
  }

  handleEnterTodo = e => {
    this.setState({enterTodo: e.target.value})
  }

  handleAddTod =() => {
    const { enterTodo, todos } = this.state;
    const newTodo ={
      id: Math.round(Math.random() * 100),
      text: enterTodo,
    }

    enterTodo === '' 
    ? this.setState({ todos: [...todos], enterTodo: '' }) 
    : this.setState({ todos: [...todos, newTodo], enterTodo: '' })

  }

  handleRemoveTodo = (todoId) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter(({ id }) => id !== todoId);
    this.setState({todos: updatedTodos})
  }

  isEmptyTodo = () =>this.state.todos.length === 0;

  render = () => (
    <TodoComponent 
      enterTodo={this.state.enterTodo}
      onEnterTodo={this.handleEnterTodo}
      onAddTod={this.handleAddTod}
      onRemoveTodo={this.handleRemoveTodo}
      todos={this.state.todos}
      isEmptyTodo={this.isEmptyTodo()}
    />
  )
  }

export default Todos;