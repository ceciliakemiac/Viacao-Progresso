import React, { useContext } from 'react';

import { UsuarioContext } from '../../context/UsuarioContext';

const Usuario = (props) => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div>
      Oi {usuario.nome}
    </div>
  );
}

export default Usuario;
