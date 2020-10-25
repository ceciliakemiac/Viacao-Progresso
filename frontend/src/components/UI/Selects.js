import React, { useContext } from 'react';

import styles from './Selects.module.css';
import { SelectContext } from '../../context/SelectContext';
import Select from './Select';

const Selects = props => {
  const { tiposOptions, orderByOptions, tipoValue, orderByOptionsValue,
    selectTipoChangedHandler, selectOrderByChangedHandler } = useContext(SelectContext);

  return (
    <div className={styles.selects}>
      <Select
        options={tiposOptions}
        value={tipoValue}
        change={selectTipoChangedHandler}
      />
      <Select
        options={orderByOptions}
        value={orderByOptionsValue}
        change={selectOrderByChangedHandler}
      />
    </div>
  );
};

export default Selects;

