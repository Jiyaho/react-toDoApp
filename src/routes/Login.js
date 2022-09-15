import { useState } from 'react';
import styles from '../css/Login.module.css';
import Quotes from '../components/Quotes';

function Login() {
  const [user, setUser] = useState("");
  const logSubmit = (e) => {
    e.preventDefault();
    setUser("");
    localStorage.setItem("username", user);
    window.location.replace("/todo"); // userID sumbit 후 새로고침
  };
  const logChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrap}>
        <form onSubmit={logSubmit}>
          <input
            className={styles.loginInput}
            required
            maxLength="15"
            onChange={logChange}
            value={user}
            type="text" 
            placeholder="What's your name?"
          />
          <button className={styles.loginBtn}>✍🏼</button>
        </form>
        {<Quotes />}
      </div>
    </div>
  )
};

export default Login;