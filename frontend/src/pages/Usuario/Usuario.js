import React, { useContext } from 'react';

import { UsuarioContext } from '../../context/UsuarioContext';
import { useUsuarioCorposCelestes } from '../../context/CorposContext';
import Selects from '../../components/UI/Selects';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';
import styles from './Usuario.module.css';

const Usuario = (props) => {
  const { usuario } = useContext(UsuarioContext);
  const { usuarioCorposCelestes } = useUsuarioCorposCelestes();

  return (
    <div>
      <h4 className={styles.nome} >Suas Viagens, {usuario.nome}!</h4>
      {console.log("USUARIO NOME: " + usuario.nome)}
      <div className={styles.usuario} >
        <div className={styles.corpos} >
          <Selects />
          <CorposCelestes corpos={usuarioCorposCelestes} />
        </div>
      </div>
    </div>
  );
}

export default Usuario;
