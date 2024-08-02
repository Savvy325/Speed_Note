import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hompage.css';
import fullLogo from '../../images/Full_Logo.png';

const HomepageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    setTimeout(() => {
      if (email === 'savvy@yahoo.com' && password === 'password') {
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    }, 1000);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="homepage-login">
      <div className="main-content">
        <div className="left-2">
          <div className="spacer" />
          <img className="full-logo" alt="Full logo" src={fullLogo} />
          <div className="copy-rights">
            <div className="text-wrapper-7">@2024 All Rights Reserved</div>
          </div>
        </div>
        <div className="right-3">
          <div className="spacer" />
          <div className="login-info">
            <header className="header-2">
              <p className="text-wrapper-8">Log In to Speed Note</p>
              <p className="text-wrapper-9">Experience fast and easy documentation. Log in here!</p>
            </header>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="checkbox"
                  />
                  <label htmlFor="remember-me" className="checkbox-label">Remember my account</label>
                </div>
                <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Log In
                </button>
              </div>
            </form>
            <div className="signup-link">
              <p className="text-wrapper-11">
                Don’t have an account?&nbsp;&nbsp;
                <span className="sign-up-link">Sign Up</span>
              </p>
            </div>
            <div className="links">
              <div className="text-wrapper-12">Terms and Conditions</div>
              <div className="text-wrapper-12">Privacy Policy</div>
              <div className="text-wrapper-12">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageLogin;