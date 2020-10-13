import React from 'react';

import styles from './NavBar.module.css';

const Menu = (props) => {
  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.logo}>
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
