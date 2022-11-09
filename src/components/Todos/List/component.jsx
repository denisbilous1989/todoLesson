import React from 'react';

import Item from './Item/component';

const List = ({ todos, onRemoveTodo}) => (
  <ul>
    {todos.map(({id, text}) =>(
      <Item 
        key={id}
        text={text}
        onRemoveTodo={onRemoveTodo}
      />
    ))}
  </ul>
)

export default List;