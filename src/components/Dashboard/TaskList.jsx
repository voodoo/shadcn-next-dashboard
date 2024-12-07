import React from 'react';
import './TaskList.css';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Design Homepage', priority: 'High', dueDate: '2024-03-25' },
    { id: 2, title: 'Setup Database', priority: 'Medium', dueDate: '2024-03-28' },
    { id: 3, title: 'User Testing', priority: 'Low', dueDate: '2024-04-01' },
  ];

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <div className="task-items">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <div className="task-checkbox">
              <input type="checkbox" id={`task-${task.id}`} />
            </div>
            <div className="task-content">
              <h3>{task.title}</h3>
              <div className="task-meta">
                <span className={`priority priority-${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
                <span className="due-date">Due: {task.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList; 