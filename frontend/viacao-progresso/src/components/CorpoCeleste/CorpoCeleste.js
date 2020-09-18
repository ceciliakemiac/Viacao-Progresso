import React, { useEffect, useState } from 'react';
import styles from './CorpoCeleste.module.css';

const corpoCeleste = (props) => {

  return (
    <div className={styles.card}>
      <img src="http://localhost:8082/imagens/marte1.jpg" />
      <div className={styles.container}>
        <p>Marte</p>
      </div>
    </div>
  )
}

export default corpoCeleste;
