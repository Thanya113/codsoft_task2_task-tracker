// src/App.js
import React, { useState } from 'react';
import './App.css';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const updateTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompletion = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Tracker Application</h1>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
        <center><FaPlus className="icon" /></center> 
         </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'complete-task' : ''}>
            <span>{task.text}</span>
            &nbsp;&nbsp;&nbsp;
            <div>
              <button className="update-button" onClick={() => updateTask(task.id, prompt('Update Task', task.text))}>
                <FaEdit className="icon" />
                
              </button>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                <FaTrash className="icon" />
                
              </button>
              <button onClick={() => toggleCompletion(task.id)}>
                {task.completed ? (
                  <>
                   <FaTimes className="icon" />
                    Incomplete
                  </>
                ) : (
                  <>
                    <FaCheck className="icon" />
                    Completed
                  </>
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
