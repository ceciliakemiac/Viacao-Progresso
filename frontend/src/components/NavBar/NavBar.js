import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Avatar, Button, makeStyles } from '@material-ui/core';

import styles from './NavBar.module.css';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { logout } from '../../service/auth';
import { UsuarioContext } from '../../context/UsuarioContext';
import ImagemUsuario from '../../assets/avatar.jpg';

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
  const { autenticado, setAutenticado, usuario, setUsuario } = useContext(UsuarioContext);

  const handleLogout = () => {
    logout();
    setAutenticado(false);
    setUsuario({
      "id": null,
      "email": "",
      "nome": "",
      "senha": "",
      "created_at": null,
      "updated_at": null
    })
  }

  const navBarDeslogado = () => {
    return (
      <div className={styles.links} >
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

  const navBarLogado = () => {
    return (
      <div className={styles.links} >
        {console.log("LOGADO:")}
        {console.log(usuario)}
        <Link to="/" >
          <Button
            className={classes.button}
            style={{ marginRight: 20 }}
            onClick={() => handleLogout()} >Logout
          </Button>
        </Link>
        <Link to={`/usuario/${usuario.id}`} >
          <Avatar alt="perfil" src={ImagemUsuario} />
        </Link>
      </div>
    );
  }

  const loginLogout = () => {
    if (!autenticado) {
      return (
        <div>
          {navBarDeslogado()}
        </div>
      );
    } else {
      return (
        <div>
          {navBarLogado()}
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











