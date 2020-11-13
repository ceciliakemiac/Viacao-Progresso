import React, { useEffect, useState } from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';

import styles from './SignUp.module.css';
import BaseService from '../../service/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  useEffect(() => {
    console.log("[FORM DATA] " + formData.nome + " " + formData.email + " " + formData.senha);
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

    BaseService.postUsuario(formData)
      .then(props.close(false))
      .catch(error => console.log('erro'));
  }

  return (
    <form className={classes.root} onSubmit={registrar} >
      <div className={styles.form} >
        <TextField
          label="Nome"
          variant="outlined"
          name="nome"
          onChange={dataChange}
          fullWidth
          required
          style={{ margin: 20 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={dataChange}
          fullWidth
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          name="senha"
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
          Registrar
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
