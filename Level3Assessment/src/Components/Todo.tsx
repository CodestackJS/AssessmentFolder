import { useEffect, useState } from "react"
import Button from "./Button"
import Counter from "./Counter"

interface TodoList {
    id: number;
    title: string;
}


const Todo = () => {
    const [todo, setTodo] = useState<TodoList[]>([]);

    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((data) => setTodo(data))
    };

useEffect(() => {
        fetchUserData();
      }, []);
    

  return (
    <>

    <h1 className="text-center">Practice Assessment</h1>
    <Counter/>
    {/* <Button btnClick={}>increase</Button> */}
    <ul>
    {todo.map((todo) =>(
        <li key={todo.id}>{todo.title}</li>
    ))}
    </ul>
    </>
  )
}

export default Todo