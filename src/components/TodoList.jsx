
import { useSelector } from "react-redux"

function TodoList(){
const todos=useSelector(state=>state.todos)
const loading=useSelector(state=>state.loading)
console.log("store",todos)
    return(
        
<div>
<h1>Todos</h1>
{loading&&<div>loading</div>}
{todos.map((item)=>(
<div>
    <div>{item.id}&nbsp;&nbsp;{item.title}</div>
    
    </div>
))}
</div>
    )
}

export default TodoList