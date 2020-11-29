import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CorposCelestes.module.css';
import CorpoCeleste from '../CorpoCeleste/CorpoCeleste';

function CorposCelestes(props) {

  return (
    <div className={styles.corposGridContainer}>
      <div className={styles.corposGrid}>
        {props.corpos.map(corpo => {
          return (
            <div className={styles.corpos}>
              <Link to={`/about-corpo/${corpo.id}`} >
                <CorpoCeleste
                  key={corpo.id}
                  name={corpo.nome}
                  imagem={corpo.image_url}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default CorposCelestes;
