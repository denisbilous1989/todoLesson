import React from 'react';

const Item = (id, text, onRemoveTodo) => (
  <li>
        {text}
        <button 
          onClick={() => onRemoveTodo(id)} 
          >
            Remove
        </button>
      </li>

)

export default Item;