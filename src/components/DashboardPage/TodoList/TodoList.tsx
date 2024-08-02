import React from 'react';
import TodoItem from './TodoItem';
import './todolist.css';

// Import images
import image1 from '../../../images/image-1.png'
import image2 from '../../../images/image-2.png';
import image3 from '../../../images/image-3.png';
import image4 from '../../../images/image-4.png';
import image5 from '../../../images/image-5.png';
import image6 from '../../../images/image-6.png';
import image7 from '../../../images/image-7.png';
import image8 from '../../../images/image.png';
import image9 from '../../../images/image-10.png';
import image10 from '../../../images/image-12.png';

const todoData = [
  { id: 1, dueDate: 'Thursday July 25, 2024', description: "Log Sophia Clark's Session Notes", action: 'Log Session Notes', imageUrl: image1 },
  { id: 2, dueDate: 'Wednesday July 25, 2024', description: "Submit Aiden Murphy's Progress Notes to Insurance", action: 'Submit Progress Notes', imageUrl: image2 },
  { id: 3, dueDate: 'Wednesday July 25, 2024', description: "Submit Charlotte Young's Progress Notes to Insurance", action: 'Submit Progress Notes', imageUrl: image3 },
  { id: 4, dueDate: 'Wednesday July 25, 2024', description: "Submit Emily Harris's Progress Notes to Insurance", action: 'Submit Progress Notes', imageUrl: image4 },
  { id: 5, dueDate: 'Wednesday July 25, 2024', description: "Log Liam Johnson's Session Notes", action: 'Log Session Notes', imageUrl: image5 },
  { id: 6, dueDate: 'Wednesday July 25, 2024', description: "Log Ava Robinson's Session Notes", action: 'Log Session Notes', imageUrl: image6 },
  { id: 7, dueDate: 'Wednesday July 25, 2024', description: "Log Noah Thompson's Session Notes", action: 'Log Session Notes', imageUrl: image7 },
  { id: 8, dueDate: 'Monday July 29, 2024', description: "Log Lucas Bennett's Session Notes", action: 'Log Session Notes', imageUrl: image8 },
  { id: 9, dueDate: 'Monday July 29, 2024', description: "Log Isabella Lewis's Session Notes", action: 'Log Session Notes', imageUrl: image9 },
  { id: 10, dueDate: 'Monday July 29, 2024', description: "Log Olivia Martine's Session Notes", action: 'Log Session Notes', imageUrl: image10 }
];

const TodoList: React.FC = () => {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {todoData.map(todo => (
        <TodoItem key={todo.id} dueDate={todo.dueDate} description={todo.description} action={todo.action} imageUrl={todo.imageUrl} />
      ))}
    </div>
  );
};

export default TodoList;