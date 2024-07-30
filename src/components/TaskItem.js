import React, { useState } from 'react';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [flag, setFlag] = useState(false);

  const togglesSave = () => {
    if (!flag) {
      setFlag(!flag);
    }
  };

  const toggleUpdate = () => {
    if (flag) {
      setFlag(!flag);
    }
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <tr>
      <td>#</td>
      <th scope="row">
        {flag ? (
          <span>{title}</span>
        ) : (
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        )}
      </th>
      <td>
        {flag ? (
          <span>{status}</span>
        ) : (
          <input className="inputstatus" type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        )}
      </td>
      <td className="button-container">
        <button type="button" class="btn btn-secondary" onClick={togglesSave}>
          Save
        </button>
        <button type="button" class="btn btn-secondary" onClick={toggleUpdate}>
          Update
        </button>
        <button type="button" class="btn btn-danger" onClick={handleDeleteTask}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
