import React, { createContext, useContext, useState, useEffect } from "react";

import BaseService from "../service/axios";
import { SelectContext } from "./SelectContext";

export const CorposContext = createContext();

export default function CorposProvider({ children }) {
  const [corposCelestes, setCorposCelestes] = useState([]);

  return (
    <CorposContext.Provider value={{ corposCelestes, setCorposCelestes }} >
      {children}
    </CorposContext.Provider>
  );
};

export function useCorposCelestes() {
  const { corposCelestes, setCorposCelestes } = useContext(CorposContext);
  const { tipoValue, orderByOptionsValue } = useContext(SelectContext);

  useEffect(() => {
    let path = `/destinos?tipo=${tipoValue}&orderBy=${orderByOptionsValue}`
    BaseService.getCorpos(path)
      .then(res => setCorposCelestes(res.data.data))
      .catch(error => console.log(error))
  }, [tipoValue, orderByOptionsValue, setCorposCelestes]);

  return { corposCelestes };
};
