import React from 'react';

import styles from './CorpoCeleste.module.css';

const CorpoCeleste = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={`${process.env.REACT_APP_API_URL}imagens/${props.fotoname}1.jpg`} />
      </div>
      <div className={styles.text}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CorpoCeleste;
