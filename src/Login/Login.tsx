import React, { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [userType, setUserType] = useState('customer'); // Corrected variable name

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value); // Corrected variable name
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    console.log('User Type:', userType);
    console.log('Email:', event.currentTarget.email.value);
    console.log('Password:', event.currentTarget.password.value);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src="logo.png" alt="SustainaLink Logo" className={styles.logo} />
        <h2>SustainaLink</h2>
        <form onSubmit={handleSubmit}>
          <select value={userType} onChange={handleUserTypeChange} className={styles.inputField}>
            <option value="customer">Customer</option>
            <option value="business">Business</option>
          </select>
          <input
            type="text"
            name="email"
            placeholder="Email Id"
            className={styles.inputField}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
            required
          />
          <input type="submit" value="Login" className={styles.submitButton} />
        </form>
        <a href="/register" className={styles.registerLink}>
          Don't have an account yet? Register here
        </a>
      </div>
    </div>
  );
};

export default Login;
