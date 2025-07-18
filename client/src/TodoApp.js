import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { suggestPriority } from './api/ai';
import './App.css';
import { useAuth } from './context/AuthContext';
import { toast } from 'react-toastify';

function TodoApp() {
  const { user, logout } = useAuth();
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [suggestions, setSuggestions] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    setTodos(prev => [...prev, todo]);
    setSuggestions(null);
    toast.info('📝 Tugas ditambahkan');
  };

  const deleteTodo = index => {
    const task = todos[index];
    setTodos(prev => prev.filter((_, i) => i !== index));
    setSuggestions(null);
    toast.warn(`🗑️ Tugas dihapus: ${task.text}`);
  };

  const editTodo = (index, newText) => {
    setTodos(prev =>
      prev.map((todo, i) => (i === index ? { ...todo, text: newText } : todo))
    );
    toast.success('✏️ Tugas berhasil diedit');
  };

  const handleSuggest = async () => {
    if (todos.length === 0) return toast.error('⚠️ Daftar tugas kosong');
    setLoadingAI(true);
    try {
      const result = await suggestPriority(todos.map(t => t.text));
      const updated = todos.map((t, i) => ({
        ...t,
        priority: result[i]?.priority || 5
      }));
      setTodos(updated);
      setSuggestions(result);
      toast.success('✅ Prioritas berhasil didapat!');
    } catch (err) {
      console.error(err);
      toast.error('❌ Gagal mendapatkan saran dari AI');
    }
    setLoadingAI(false);
  };

  const handleLogout = async () => {
    await logout();
    toast.info('🔒 Kamu telah logout');
  };

  return (
    <div className="container">
      <div className="topbar">
        <h1>🧠 AI‑Assisted To‑Do List</h1>
        <div className="auth-info">
          <span>👋 Welcome, {user?.displayName || user?.email}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <TodoInput onAdd={addTodo} />
      <TodoList items={todos} onDelete={deleteTodo} onEdit={editTodo} />

      <div className="ai-section">
        <button onClick={handleSuggest} disabled={loadingAI || todos.length === 0}>
          {loadingAI ? 'Menganalisis…' : 'Dapatkan Prioritas AI'}
        </button>
        {!suggestions && todos.length > 0 && !loadingAI && (
          <p className="hint">Klik tombol di atas untuk melihat rekomendasi dari AI.</p>
        )}
      </div>

      {suggestions && (
        <div className="suggestions">
          <h2>🔎 Rekomendasi Prioritas:</h2>
          <ol>
            {suggestions.map((item, idx) => (
              <li key={idx}>
                <strong>{item.task}</strong> — Priority <b>{item.priority}</b>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
