import React, { useEffect, useState } from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';

import styles from './SignIn.module.css';
import BaseService from '../../service/axios';
import { login } from '../../service/auth';

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

  useEffect(() => {
    console.log("[FORM DATA] " + formData.email + " " + formData.senha);
  }, [formData]);

  const dataChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function registrar(event) {
    event.preventDefault();

    console.log("DATA")
    console.log(formData)

    BaseService.login(formData)
      .then(response => {
        console.log("RESPONSE TOKEN")
        console.log(response.headers['x-auth-token'])
        login(response.headers['x-auth-token']);
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
