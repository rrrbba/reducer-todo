import React from 'react';

 const Task = ({todo, dispatch}) => {
    return (
        <div
        className={`task ${todo.completed ? 'completed' : ''}`}
        onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })}>
        <p>{todo.todo}</p>
       </div>
    )
}

export default Task