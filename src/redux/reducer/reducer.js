

const initialState = {
    todos: [
        { id: Math.random(), text: "learn redux", isComplit: false },
        { id: Math.random(), text: "learn react", isComplit: false },
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] }
        case "DELETE":
            return { ...state,todos: [...state.todos.filter(x=>x.id!==action.payload.id)] };
        case "EDIT":
            return {...state,todos:state.todos.map((el)=>el.id===action.payload.id ? {...el,text:action.payload.newTodo}
            :el
            )};
            case "ISCOMPLIT" : 
            return {
                ...state,todos:state.todos.map((el)=>el.id=== action.payload.id ? {...el ,text: action.payload.newtodo}
                : el)
            }
        default:
            return state;

    }



}
export default reducer; 
