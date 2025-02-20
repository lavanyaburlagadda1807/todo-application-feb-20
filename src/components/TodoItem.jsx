import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <motion.li
      className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TodoItem;
