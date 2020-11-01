import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './NavBar.module.css';

function Menu(props) {
  const history = useHistory();

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.logo} onClick={() => history.push('/')} >
          Viação Progresso
        </div>
        <div className={styles.links}>
          <div className={styles.login}>Login</div>
          <div>Register</div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
