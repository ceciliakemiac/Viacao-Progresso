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
      <div className={styles.usuario} style={{ width: '100%' }} >
        <div className={styles.corpos} style={{ width: '100%' }} >
          <div style={{ width: '17%', height: '25%' }} >
            <Selects />
          </div>
          <div style={{ width: '83%' }} >
            <CorposCelestes corpos={usuarioCorposCelestes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
