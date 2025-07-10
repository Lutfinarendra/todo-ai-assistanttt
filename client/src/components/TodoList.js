import React from 'react';

export default function TodoList({ items, onDelete }) {
  return (
    <ul className="todo-list">
      {items.map((item, idx) => (
        <li key={idx} className="todo-item">
          <span>{item}</span>
          <button onClick={() => onDelete(idx)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}
