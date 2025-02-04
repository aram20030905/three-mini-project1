import { useReducer} from "react"
import TodoList from './TodoList'

const initialState=[]

export const TODOS_ACTIONS ={
    ADD_TASK: 'add_task',
    DELETE_TASK:'delete_task',
    RESET_TODOS: 'reset_todos'
}

function reducer(state,action){
    switch(action.type){
        case TODOS_ACTIONS.ADD_TASK:
            return [
                ...state,
            {
               id:state.length+1,
               name:action.payload
            }
        ]
        case TODOS_ACTIONS.DELETE_TASK: 
        return state.filter(d=> d.id !== action.payload)

        case TODOS_ACTIONS.RESET_TODOS: init(action.payload)


 default: return state;

    }

}


function init(initialState){
    
    return  initialState

}
const Todos = () =>{

    const [todos, dispatch] = useReducer(reducer, initialState,init)


    return(
        <>
        <h4>Todos List {todos.length}</h4>
        Add New Task:
        <input type="text" onBlur={(e)=>dispatch({type:TODOS_ACTIONS.ADD_TASK, payload: e.target.value})}/>
<button onClick={()=>dispatch({type: TODOS_ACTIONS.RESET_TODOS, payload:initialState})}>
    RESET
    </button>
    <hr/>
<TodoList todos={todos} dispatch={dispatch}/>
        </>
    )
}


export default Todos