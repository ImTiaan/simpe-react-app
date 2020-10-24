import React, { useState } from 'react';
import TaskList from './TaskList.js';
import NewTask from './NewTask.js'

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);

  const createTask = description => {
    setTasks(task => ([...tasks,{id: nextId, description, done: false}]));
    setNextId(nextId + 1);
    //create task
  }

  const markTaskDone = id => {
    const newTaskList = tasks.map(task => {
      if(task.id === id) {
        task.done = true;
      }
      return task;
    });
    setTasks(newTaskList);
  }

  const deleteTaask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='jumbotron'>
            <h1 className='display-4'><center>Todo App</center></h1>
          </div>
              <NewTask createTask={createTask} />
              <br />
              <TaskList tasks={tasks} markTaskDone={markTaskDone} deleteTask={deleteTaask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
