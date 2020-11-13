import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Button, makeStyles } from '@material-ui/core';

import styles from './NavBar.module.css';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

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
  const [regOpen, setRegOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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
            style={{ marginRight: 10 }}
            onClick={() => setLoginOpen(true)} >Login
          </Button>
          <Modal
            open={loginOpen}
            onClose={() => setLoginOpen(false)}
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            style={{ outline: 'none' }}>
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '40%',
              width: 300, height: 250,
              overflow: 'auto',
              backgroundColor: 'white',
              border: 'none'
            }} >
              <SignIn close={setLoginOpen} />
            </div>
          </Modal>
          <Button
            className={classes.button}
            onClick={() => setRegOpen(true)} >Registrar</Button>
          <Modal
            open={regOpen}
            onClose={() => setRegOpen(false)}
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            style={{ outline: 'none' }}>
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '40%',
              width: 300, height: 300,
              overflow: 'auto',
              backgroundColor: 'white',
              border: 'none'
            }} >
              <SignUp close={setRegOpen} />
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default Menu;











