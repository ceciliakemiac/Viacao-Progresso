import React, { useEffect } from 'react';

import styles from './CorposCelestes.module.css';
import CorpoCeleste from '../CorpoCeleste/CorpoCeleste';

function CorposCelestes(props) {
  useEffect(() => {
    console.log('[CorposCelestes]', props.corposCelestes);
  });

  return (
    <div className={styles.corposGridContainer}>
      <div className={styles.corposGrid}>
        {props.corposCelestes.map(corpo => {
          return <CorpoCeleste
            key={corpo.id}
            name={corpo.nome}
            imagem={corpo.image_url}
          />
        })}
      </div>
    </div>
  );
}

export default CorposCelestes;
