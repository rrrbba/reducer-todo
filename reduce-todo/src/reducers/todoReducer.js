


export const initialState = {
    todos: [
    {todo: 'Learn about reducers',
    completed: false,
    id: 3892987589},
    {todo: 'Play Stardew Valley',
    completed: false,
    id: 3892987590}
    ]
}


export const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TODO' :
            return {
                todos: [
                    ...state.todos,
                    {
                        todo: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }

        case 'TOGGLE_COMPLETED': 

            return {
                ...state,
              todos: state.todos.map(todo => {
                  if (todo.id === action.payload.id ) {
                      console.log("ITEM DONE")
                      return {...todo, completed: !todo.completed};
                  } else {
                      return todo;
                  }
              })
            }

        case 'CLEAR': 
         return {
            ...state,
            todos: state.todos.filter(todo => {
              return todo.completed === false;
            })
          }

        default:
            return state;
    }
}