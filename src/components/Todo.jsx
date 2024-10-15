import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

function Todo() {
  const [tasks, setTask] = useState(['wake up at 5 am', 'Do 30 min exercise']);
  const [newTask, setNewTask] = useState('');

  function handelEvent(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() == '') {
      Swal.fire('Please Write Someting!');
    } else {
      setTask((t) => [...tasks, newTask]);
      setNewTask('');
      localStorage.setItem('', [...tasks]);
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
      console.log([updatedTask[index], updatedTask[index + 1]]);
    }
  }
  return (
    <div id="wrapper">
      <div className="input-group mb-3">
        <input
          id="input"
          type="text"
          className="form-control"
          placeholder="Write Toods"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={newTask}
          onChange={handelEvent}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol id="list-group" className="list-group">
        {tasks?.map((task, index) => (
          <li key={index} className="list-group-item">
            <span>{task}</span>
            <span>
              <button id="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button id="move-btn" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button id="move-btn" onClick={() => moveTaskDown(index)}>
                ⬇️
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
