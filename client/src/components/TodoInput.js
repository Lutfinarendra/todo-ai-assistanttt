import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, deadline });
    setText('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Tambah tugas..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
