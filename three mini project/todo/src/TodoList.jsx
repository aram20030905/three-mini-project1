import { TODOS_ACTIONS } from "./Todos"

const TodoList = (todos,dispatch) =>{
    return(
        <>
        {todos.map(todo=>(
        <li key={todo.id}>{todo.name}
            <span>
                <button onClick={()=>dispatch({type:TODOS_ACTIONS.DELETE_TASK, payload:todo.id})}>
                   Delete 
                </button>
            </span>
        </li>
 
    )
)

}

        </>
    )
}

export default TodoList