import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState({
    "id": null,
    "email": "",
    "nome": "",
    "senha": "",
    "created_at": null,
    "updated_at": null
  });

  return (
    <UsuarioContext.Provider
      value={{ autenticado, setAutenticado, usuario, setUsuario }} >
      {children}
    </UsuarioContext.Provider>
  );
}

export default UsuarioProvider;
