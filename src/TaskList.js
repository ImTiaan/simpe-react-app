import React from 'react';
import Task from './Task.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ tasks, markTaskDone, deleteTask }) => {
    return (
        <ul className="list-group">
            {tasks.map(task => ( 
                <li key={task.id} className="list-group-item">
                    <Task task={task} markTaskDone={markTaskDone} deleteTask={deleteTask}/>
                </li>
            ))}
        </ul>
    );
}