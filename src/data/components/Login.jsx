import { useState } from 'react';
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin();
    } else {
      setError('Please enter a username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <span className="brand-logo">⬡</span>
          <h2>Welcome to Campus<span className="brand-accent">Hub</span></h2>
          <p>Sign in to access your digital campus</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your student ID or email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="#">Request access</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
