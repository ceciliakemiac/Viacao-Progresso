import React from 'react';

import SelectProvider from '../../context/SelectContext';
import CorposProvider from '../../context/CorposContext';
import styles from './InicialPage.module.css';
import Selects from '../../components/UI/Selects';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

function InicialPage(props) {
  return (
    <SelectProvider>
      <CorposProvider>
        <div className={styles.telaInicial} >
          <div className={styles.body} >
            <Selects />
            <CorposCelestes />
          </div>
        </div>
      </CorposProvider>
    </SelectProvider>
  );
}

export default InicialPage;
