import React, { createContext, useContext, useState, useEffect } from "react";

import BaseService from "../service/axios";
import { SelectContext } from "./SelectContext";

export const CorposContext = createContext();

export default function CorposProvider({ children }) {
  const [corposCelestes, setCorposCelestes] = useState([]);
  const [usuarioCorposCelestes, setUsuarioCorposCelestes] = useState([]);

  return (
    <CorposContext.Provider value={{ corposCelestes, setCorposCelestes, usuarioCorposCelestes, setUsuarioCorposCelestes }} >
      {children}
    </CorposContext.Provider>
  );
};

export function useCorposCelestes() {
  const { corposCelestes, setCorposCelestes } = useContext(CorposContext);
  const { tipoValue, orderByOptionsValue } = useContext(SelectContext);

  useEffect(() => {
    let path = `/destinos?tipo=${tipoValue}&orderBy=${orderByOptionsValue}`
    BaseService.getServer(path)
      .then(res => setCorposCelestes(res.data.data))
      .catch(error => console.log(error))
  }, [tipoValue, orderByOptionsValue, setCorposCelestes]);

  return { corposCelestes };
};

export function useUsuarioCorposCelestes() {
  const { usuarioCorposCelestes, setUsuarioCorposCelestes } = useContext(CorposContext);
  const { tipoValue, orderByOptionsValue } = useContext(SelectContext);

  useEffect(() => {
    let path = `/usuarios/destinos?tipo=${tipoValue}&orderBy=${orderByOptionsValue}`
    BaseService.getUsuariosDestinos(path)
      .then(res => setUsuarioCorposCelestes(res.data.data))
      .catch(error => console.log(error))
  }, [tipoValue, orderByOptionsValue, setUsuarioCorposCelestes]);

  return { usuarioCorposCelestes };
}
















