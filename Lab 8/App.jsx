import { useState } from "react";
import "./App.css";

export default function ReminderApp() {
  const [tasks, setTasks]=useState([]);
  const [filter,setFilter]=useState("all");
  const[taskName,setTaskName]=useState("");
  const[dueDate,setDueDate]=useState("");
  const[description,setDescription]=useState("");

  const addTask=()=>{
    if(!taskName|| !dueDate) return;
    setTasks([...tasks,{id:Date.now(),name:taskName,dueDate,description,completed:false}]);
    setTaskName("");
    setDueDate("");
    setDescription("");
  };
  const toggleCompletion=(id)=>{
    setTasks(tasks.map(task=>task.id===id?
      {...task,completed: !task.completed}:task));
  };

  const filteredTasks=tasks.filter(task=>(filter==="completed"?
    task.completed:filter==="pending"? !task.completed:true));

    return(
      <div className="container">
        <h1 className="title">Reminder Application</h1>
        <div className="input-section">
          <input type="text" placeholder="Task Name" value={taskName}
          onChange={(e)=>setTaskName(e.target.value)}/>
          <input type="date" value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}/>
          <textarea placeholder="Description (optional)" value={description}
          onChange={(e)=>setDescription(e.target.value)}></textarea>
          <button onClick={addTask} className="add-btn">Add Task</button>
        </div>
        <div className="filter-buttons">
          {["all","completed","pending"].map(type=>(
            <button key={type}
            onClick={()=>setFilter(type)}>{type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <ul className="task-list">
          {filteredTasks.map(task=>(
            <li key={task.id} className="task-item">
              <div>
                <p className="task-name">{task.name}</p>
                <p className="task-date">Due:{task.dueDate}</p>
                {task.description && <p className="task-desc">{task.description}</p>}
              </div>
              <button onClick={()=>toggleCompletion(task.id)}
              className={task.completed? "completed":"pending"}>
                {task.completed? "Completed":"Mark Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}
