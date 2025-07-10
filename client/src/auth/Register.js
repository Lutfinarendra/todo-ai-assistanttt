// src/auth/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';
import { toast } from 'react-toastify';

function Register() {
  const { register } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, fullName); // simpan nama display
      toast.success('🎉 Registrasi berhasil!');
      navigate('/');
    } catch (err) {
      console.error('❌ Registrasi gagal:', err);
      toast.error('❌ Registrasi gagal: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Daftar</h2>

      <input
        type="text"
        placeholder="Nama lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password (min. 6 karakter)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={handleRegister}>Daftar</button>

      <div className="register-link">
        Sudah punya akun? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Register;
