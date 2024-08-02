import React, {useState} from 'react';
import './todolist.css';
import LogSessionNote from '../../LogSessionNote/LogSessionNote';

interface TodoItemProps {
  dueDate: string;
  description: string;
  action: string;
  imageUrl: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ dueDate, description, action, imageUrl }) => {
  const [isLogSessionNoteOpen, setLogSessionNoteOpen] = useState(false);

  const handleOpenLogSessionNote = () => setLogSessionNoteOpen(true);
  const handleCloseLogSessionNote = () => setLogSessionNoteOpen(false);

  return (
    <>
      <div className="todo-item">
        <img src={imageUrl} alt="Patient" className="patient-image" />
        <div className="task-info">
          <p className="due-date">Due: {dueDate}</p>
          <p className="description">{description}</p>
        </div>
        <button className="action-button" onClick={handleOpenLogSessionNote}>{action}</button>
      </div>
      <LogSessionNote isOpen={isLogSessionNoteOpen} onClose={handleCloseLogSessionNote} />
    </>
  );
};

export default TodoItem;