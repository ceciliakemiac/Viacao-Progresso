import React, { useEffect } from 'react';

import styles from './CorpoCeleste.module.css';

function CorpoCeleste(props) {
  useEffect(() => {
    console.log(props.imagem)
  });

  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        {/* <img src={`${process.env.REACT_APP_API_URL}imagens/${props.fotoname}1.jpg`} /> */}
        <img src={`${props.imagem}`} />
      </div>
      <div className={styles.text}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CorpoCeleste;
