import React from 'react';

const EnterTodo =({ enterTodo, onEnterTodo, onAddTod }) => (
  <div>
     <input 
       type="text" 
       placeholder='Enter new Todo'
       value={enterTodo}
       onChange={onEnterTodo}
      />
     <button
       onClick={onAddTod}
     >
       Add new Todo
     </button>
</div>
)

export default EnterTodo;