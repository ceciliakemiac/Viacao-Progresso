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
  const [erro, setErro] = useState('');

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
    const { nome, email, senha } = formData

    if (nome === '' || email === '' || senha === '') {
      setErro('Preencha todos os campos para se registrar');
    } else {
      BaseService.postUsuario(formData)
        .then(props.close(false))
        .catch(setErro('Erro ao tentar te registrar no sistema'));
    }
  }

  return (
    <form className={classes.root} onSubmit={registrar} >
      <div className={styles.form} >
        {console.log('NOME')}
        {console.log(formData.nome)}
        {console.log('ERRO')}
        {console.log(erro)}
        {erro && <p>{erro}</p>}
        <TextField
          label="Nome"
          variant="outlined"
          name="nome"
          onChange={dataChange}
          fullWidth
          required
          style={{ marginTop: 20 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          onChange={dataChange}
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
          Registrar
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
