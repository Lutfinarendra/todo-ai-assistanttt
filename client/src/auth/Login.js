// src/auth/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';
import { toast } from 'react-toastify';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await login(email, password);
      const name = userCredential.user.displayName || userCredential.user.email;
      toast.success(`👋 Selamat datang, ${name}!`);
      navigate('/');
    } catch (err) {
      console.error("❌ Login gagal:", err.code, err.message);
      toast.error("❌ Login gagal: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button onClick={handleLogin}>Login</button>

      <div className="register-link">
        Belum punya akun? <Link to="/register">Daftar</Link>
      </div>
    </div>
  );
}

export default Login;
