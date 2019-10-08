import React from 'react';
import Task from './Task';


const Todo = ({state, dispatch}) => {


    return(
        <div>
           {/* <TodoForm /> */}
           <h4>{state.todos.map(todo => (
               <Task key = {todo.id} todo = {todo} dispatch = {dispatch} />
           ))}</h4>
        </div>
    )
}


export default Todo;