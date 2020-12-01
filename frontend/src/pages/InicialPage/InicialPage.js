import React from 'react';

import { useCorposCelestes } from '../../context/CorposContext';
import styles from './InicialPage.module.css';
import Selects from '../../components/UI/Selects';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

const InicialPage = props => {
  const { corposCelestes } = useCorposCelestes()

  return (
    <div className={styles.telaInicial} style={{ width: '100%' }} >
      <div className={styles.body} style={{ width: '100%', margin: 10 }} >
        <div style={{ width: '17%', height: '25%' }}>
          <Selects />
        </div>
        <div style={{ width: '83%' }} >
          <CorposCelestes corpos={corposCelestes} />
        </div>
      </div>
    </div>
  );
}

export default InicialPage;
