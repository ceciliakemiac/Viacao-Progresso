import React, { createContext, useContext, useState, useEffect } from "react";

import BaseService from "../service/axios";
import { SelectContext } from "./SelectContext";

export const CorposContext = createContext();

const CorposProvider = ({ children }) => {
  const [corposCelestes, setCorposCelestes] = useState([]);
  const { tipoValue, orderByOptionsValue } = useContext(SelectContext);

  useEffect(() => {
    let path = `/destinos?tipo=${tipoValue}&orderBy=${orderByOptionsValue}`
    BaseService.getCorpos(path)
      .then(res => setCorposCelestes(res.data.data))
      .catch(error => console.log(error))
  }, [tipoValue, orderByOptionsValue]);

  return (
    <CorposContext.Provider value={{ corposCelestes }} >
      {children}
    </CorposContext.Provider>
  );
};

export default CorposProvider;
