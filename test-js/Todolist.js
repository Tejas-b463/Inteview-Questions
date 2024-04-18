import React, { useState } from "react";
import { obj } from "./constant";

const TodoList = () => {
    const [title, setTitle] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const handleTask = (e) => {
        setTitle(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const newTask = { title: title };
        setMainTask([...mainTask, newTask]);
        setTitle("");

    };

    const deleteTask = (i) => {
        const copyTask = [...mainTask]
        copyTask.splice(i, 1)
        setMainTask(copyTask)
    }

    return ( <
        >
        <
        form onSubmit = { submitForm } >
        <
        input placeholder = "Enter Task"
        value = { title }
        onChange = { handleTask }
        /> <
        button > ADD Task < /button> < /
        form >

        <
        div > {
            mainTask.map((task, i) => ( <
                div key = { task.id } >
                <
                p > { task.title } < /p> <
                button onClick = {
                    () => deleteTask(i)
                } > Delete < /button> < /
                div >
            ))
        } <
        /div> < / >
    );
};

export default TodoList;