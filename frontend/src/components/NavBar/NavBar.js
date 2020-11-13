import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Button, makeStyles } from '@material-ui/core';

import styles from './NavBar.module.css';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { logout } from '../../service/auth';
import { UsuarioContext } from '../../context/UsuarioContext';

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
  const { autenticado, setAutenticado } = useContext(UsuarioContext);

  const handleLogout = () => {
    logout();
    setAutenticado(false);
  }

  const navBarLogado = () => {
    return (
      <div>
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
          onClick={() => setRegOpen(true)} >Registrar
        </Button>
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
    );
  }

  const navBarDeslogado = () => {
    return (
      <div>
        <Button
          className={classes.button}
          style={{ marginRight: 10 }}
          onClick={() => handleLogout()} >Logout
        </Button>
      </div>
    );
  }

  const loginLogout = () => {
    if (!autenticado) {
      return (
        <div>
          {navBarLogado()}
        </div>
      );
    } else {
      return (
        <div>
          {navBarDeslogado()}
        </div>
      );
    }
  }

  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menu}>
        <Button
          className={classes.button}
          onClick={() => history.push('/')} >Viação Progresso
        </Button>
        {loginLogout()}
      </div>
    </nav >
  );
}

export default Menu;











