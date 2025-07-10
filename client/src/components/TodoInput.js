import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Tambah tugas..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">
        Tambah
      </button>
    </form>
  );
}
