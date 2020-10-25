import React, { createContext, useState } from "react";

export const SelectContext = createContext();

const SelectProvider = ({ children }) => {
  const [tiposOptions] = useState([
    { value: 1, displayValue: 'Planeta' },
    { value: 2, displayValue: 'Estrela' },
    { value: 3, displayValue: 'Constelação' },
    { value: 4, displayValue: 'Galáxia' },
    { value: 5, displayValue: 'Buraco Negro' },
    { value: 6, displayValue: 'Perdido No Tempo' },
  ]);
  const [orderByOptions] = useState([
    { value: 'nome', displayValue: 'Nome' },
    { value: 'nota', displayValue: 'Popularidade' },
    { value: 'periculosidade', displayValue: 'Periculosidade' },
  ]);
  const [tipoValue, setTipoValue] = useState(1);
  const [orderByOptionsValue, setOrderByOptionsValue] = useState('nome');

  const selectTipoChangedHandler = (event) => {
    setTipoValue(event.target.value);
  };

  const selectOrderByChangedHandler = (event) => {
    setOrderByOptionsValue(event.target.value);
  };

  return (
    <SelectContext.Provider value={{ tiposOptions, orderByOptions, tipoValue, orderByOptionsValue, selectTipoChangedHandler, selectOrderByChangedHandler }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
