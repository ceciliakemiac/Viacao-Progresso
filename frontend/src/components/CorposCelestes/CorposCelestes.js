import React, { useContext } from 'react';

import styles from './CorposCelestes.module.css';
import { CorposContext } from '../../context/CorposContext';
import CorpoCeleste from '../CorpoCeleste/CorpoCeleste';

function CorposCelestes(props) {
  const { corposCelestes } = useContext(CorposContext);

  return (
    <div className={styles.corposGridContainer}>
      <div className={styles.corposGrid}>
        {corposCelestes.map(corpo => {
          return (
            <div className={styles.corpos}>
              <CorpoCeleste
                key={corpo.id}
                name={corpo.nome}
                imagem={corpo.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CorposCelestes;
