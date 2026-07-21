import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const handleInputChange = (e) => {
    setTask(e.target.value);
  }
  
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Todo List</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="Enter a task..."
          style={{ padding: "8px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px", cursor: "pointer" }}>
          Add Task
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "15px" }}>{t}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
