import React, { useState } from 'react';


export const TodoForm = (props) => {
    
    const  [todo, setTodo] = useState();

    const handleChanges = e => {
       
        setTodo(e.target.value);
    };


    return (
        <div>
            <input
             type = "text"
             name = "todo"
             value = {todo}
             onChange = {handleChanges}
             
             />

             <button 
             onClick =  { () => {
                props.dispatch({ type: 'ADD_TODO', payload: todo})
                setTodo('')
             }}
             
             >Submit</button>

             <button
             onClick = { () => {
                 props.dispatch({ type: 'CLEAR'})

             }}
             >Clear Completed</button>

            

        </div>
    );
}