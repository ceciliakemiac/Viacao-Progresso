import React, { useContext } from 'react';

import { UsuarioContext } from '../../context/UsuarioContext';
import { useUsuarioCorposCelestes } from '../../context/CorposContext';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

const Usuario = (props) => {
  const { usuario } = useContext(UsuarioContext);
  const { usuarioCorposCelestes } = useUsuarioCorposCelestes();

  return (
    <div>
      Oi {usuario.nome}
      {console.log("USUARIO NOME: " + usuario.nome)}
      <CorposCelestes corpos={usuarioCorposCelestes} />
    </div>
  );
}

export default Usuario;
