import React from 'react';

const ListItem = (id, text, onRemoveTodo) => (
  <>
  <li key={id}>
        {text}
        <button 
          onClick={() => onRemoveTodo(id)} 
          >
            Remove
        </button>
      </li>
  </>

)

export default ListItem;