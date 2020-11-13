import React, { useContext, useState } from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';

import styles from './SignIn.module.css';
import BaseService from '../../service/axios';
import { isAuthenticated, login } from '../../service/auth';
import { UsuarioContext } from '../../context/UsuarioContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const { setAutenticado } = useContext(UsuarioContext);

  const dataChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function registrar(event) {
    event.preventDefault();

    BaseService.login(formData)
      .then(response => {
        login(response.headers['x-auth-token']);
        if (isAuthenticated) {
          setAutenticado(true);
        }
        props.close(false);
      })
      .catch(error => console.log(error));
  }

  return (
    <form className={classes.root} onSubmit={registrar} >
      <div className={styles.form} >
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          onChange={dataChange}
          style={{ marginTop: 20 }}
          fullWidth
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          name="senha"
          type="password"
          onChange={dataChange}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default SignIn;
