import React from 'react';

import { useCorposCelestes } from '../../context/CorposContext';
import styles from './InicialPage.module.css';
import Selects from '../../components/UI/Selects';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

const InicialPage = props => {
  const { corposCelestes } = useCorposCelestes()

  return (
    <div className={styles.telaInicial} >
      <div className={styles.body} >
        <Selects />
        <CorposCelestes corpos={corposCelestes} />
      </div>
    </div>
  );
}

export default InicialPage;
