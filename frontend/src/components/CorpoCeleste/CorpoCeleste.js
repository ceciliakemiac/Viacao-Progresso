import React, { useEffect } from 'react';

import styles from './CorpoCeleste.module.css';

function CorpoCeleste(props) {
  useEffect(() => {
    console.log(props.imagem)
  });

  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={`${props.imagem}`} alt="corpoCeleste" />
      </div>
      <div className={styles.text}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CorpoCeleste;
