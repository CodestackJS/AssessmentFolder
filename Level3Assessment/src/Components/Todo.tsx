import { useEffect, useState } from "react"
import Button from "./Button"
import Counter from "./Counter"

interface TodoList {
    id: number;
    name: string;
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
    
    
    </>
  )
}

export default Todo