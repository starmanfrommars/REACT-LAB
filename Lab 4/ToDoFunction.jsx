import React, { useState } from 'react'

const ToDoFunction = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    const addTask = ()=> {
        if(task.trim()==="") return;
        setTasks([...tasks, {task: task, completed: false}]);
        setTask("");
    }

    const deleteTask = (index)=> {
        setTasks(tasks.filter((_,i)=> i!==index));
    }

    const toggleTask = (index) => {
        setTasks(
            tasks.map((t,i)=> 
                i===index?{...t, completed: !t.completed }:t
            )
        )
    }

    return (
        <div style={styles.container}>
            <h1>ToDo List</h1>

            <div>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e)=> setTask(e.target.value)} 
                    placeholder="Enter a task"
                    style={styles.input} 
                />
                <button onClick={addTask} style={styles.addButton}>Add</button>
            </div>

            <ul style={styles.list}>
                {tasks.map((t,index)=> (
                    <li key={index} style={styles.taskItem}>
                        <span 
                            onClick={()=> toggleTask(index)} 
                            style={{
                                textDecoration: t.completed?"line-through":"none", 
                                color: t.completed?"green":"black",
                                cursor: "pointer"
                            }}
                        >{t.task}</span>
                        <button onClick={()=> deleteTask(index)} style={styles.deleteButton}></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "30px",
        fontFamily: "Arial"
    },
    input: {
        padding: "8px",
        marginRight: "10px",
        width: "250px"
    },
    addButton: {
        padding: "8px",
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer"
    },
    list: {
        listStyle: "none",
        pading: 0
    },
    taskItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "50px"
    },
    deleteButton: {
        backgroundColor: "red",
        color: "white",
        border: "none",
        padding: "5px",
        cursor: "pointer"
    }
}

export default ToDoFunction
