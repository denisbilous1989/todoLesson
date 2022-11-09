import React from 'react';

import EmptyList from './emptyList';
import EnterTodo from './EnterTodo/component';
import List from './List/component';


const TodosComponent =({ enterTodo, onEnterTodo, onAddTod, onRemoveTodo, todos, isEmptyTodo}) => (
  <div>
        <h1>Todos</h1>
          <EnterTodo 
            enterTodo={enterTodo}
            onEnterTodo={onEnterTodo}
            onAddTod={onAddTod}
          />
        {isEmptyTodo 
        ? <EmptyList 
            text={'todos'}
          />
        : <List 
            todos={todos}
            onRemoveTodo={onRemoveTodo}
          />
        }
  </div>
)

export default TodosComponent;