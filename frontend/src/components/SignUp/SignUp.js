import React from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';

import styles from './SignUp.module.css';

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

  return (
    <form className={classes.root} >
      <div className={styles.form} >
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Registrar
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
