import { useState } from "react";

function NewTodo({onNewTodo}){
    const [todo, setToDo] = useState(' ');
    const handleClick = () => {
        if (!todo) {
            return;
        }
        onNewTodo(todo);
        setToDo(' ');
    };

    const handleChange = (e) => {
        const todo = e.target.value;
        setToDo(todo);
        console.log({ todo });
    };

    return (
        <div>
            <input type='text' onChange={handleChange} value ={todo} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default NewTodo;