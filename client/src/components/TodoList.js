// src/components/TodoList.js
import React, { useState } from 'react';

export default function TodoList({ items, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (idx, text) => {
    setEditIndex(idx);
    setEditText(text);
  };

  const handleSave = () => {
    onEdit(editIndex, editText);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <ul className="todo-list">
      {items.map((item, idx) => (
        <li key={idx} className="todo-item">
          {editIndex === idx ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
              <button onClick={handleSave}>Simpan</button>
            </>
          ) : (
            <>
              <span>
                {item.text} {item.deadline && `🗓️ (${item.deadline})`}
              </span>
              <div>
                {item.priority && (
                  <span className={`priority priority-${item.priority}`}>
                    P{item.priority}
                  </span>
                )}
                <button onClick={() => startEdit(idx, item.text)}>Edit</button>
                <button onClick={() => onDelete(idx)}>Hapus</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
