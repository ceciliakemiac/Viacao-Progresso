import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Button, makeStyles } from '@material-ui/core';

import styles from './NavBar.module.css';
import SignUp from '../SignUp/SignUp';

const useStyles = makeStyles({
  button: {
    color: '#fff9ec',
    fontFamily: '"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif',
    fontWeight: 'bold',
  },
});

function Menu(props) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menu}>
        <Button
          className={classes.button}
          onClick={() => history.push('/')} >Viação Progresso
        </Button>
        <div className={styles.links}>
          <Button
            className={classes.button}
            style={{ marginRight: 10 }}  >Login
          </Button>
          <Button
            className={classes.button}
            onClick={() => setOpen(true)} >Register</Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            style={{ outline: 'none' }}>
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '30%',
              width: 300, height: 300,
              overflow: 'auto',
              backgroundColor: 'white',
              border: 'none'
            }} >
              <SignUp />
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default Menu;











