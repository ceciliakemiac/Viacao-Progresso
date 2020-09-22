import React, { useState } from 'react';

import styles from './CorposCelestes.module.css';
import CorpoCeleste from '../CorpoCeleste/CorpoCeleste';

function CorposCelestes(props) {
  const [corposCelestes, setCorposCelestes] = useState([
    {
      name: "Arcturus",
      fotoName: "arcturus",
    },
    {
      name: "Marte",
      fotoName: "marte",
    },
    {
      name: "Vênus",
      fotoName: "venus",
    },
    {
      name: "Vega",
      fotoName: "vega",
    },
    {
      name: "Spica",
      fotoName: "spica",
    },
    {
      name: "Sagittarius A",
      fotoName: "sagittariusa",
    },
    {
      name: "Júpiter",
      fotoName: "jupiter",
    },
    {
      name: "Andromeda",
      fotoName: "andromeda",
    }
  ]);

  return (
    <div className={styles.corposGridContainer}>
      <div className={styles.corposGrid}>
        {corposCelestes.map(corpo => {
          return <CorpoCeleste
            key={corpo.name}
            name={corpo.name}
            fotoname={corpo.fotoName}
          />
        })}
      </div>
    </div>
  );
}

export default CorposCelestes;
