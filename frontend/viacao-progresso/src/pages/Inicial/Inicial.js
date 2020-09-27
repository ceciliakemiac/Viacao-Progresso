import React, { useEffect, useState } from 'react';

import styles from './Inicial.module.css';
import axios from '../../service/axios';
import Select from '../../components/UI/Select';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

function Inicial(props) {
  const [tiposOptions, setTiposOptions] = useState([
    { value: 1, displayValue: 'Planeta' },
    { value: 2, displayValue: 'Estrela' },
    { value: 3, displayValue: 'Constelação' },
    { value: 4, displayValue: 'Galáxia' },
    { value: 5, displayValue: 'Buraco Negro' },
    { value: 6, displayValue: 'Perdido No Tempo' },
  ]);
  const [orderByOptions, setOrderByOptions] = useState([
    { value: 'nome', displayValue: 'Nome' },
    { value: 'nota', displayValue: 'Popularidade' },
    { value: 'periculosidade', displayValue: 'Periculosidade' },
  ])
  const [tipoValue, setTipoValue] = useState(1);
  const [orderByOptionsValue, setOrderByOptionsValue] = useState('nome');
  const [corposCelestes, setCorposCelestes] = useState([]);

  useEffect(() => {
    let getCorpos = async () => {
      let response = await axios
        .get(`/destinos?tipo=${tipoValue}&orderBy=${orderByOptionsValue}`)
        .catch((error) => console.log(error))
      setCorposCelestes(response.data.data);
    };
    console.log(corposCelestes);
    getCorpos();
  }, [tipoValue, orderByOptionsValue]);

  const selectTipoChangedHandler = (event) => {
    event.preventDefault();
    setTipoValue(event.target.value);
  }

  const selectOrderByChangedHandler = (event) => {
    event.preventDefault();
    setOrderByOptionsValue(event.target.value);
  }

  return (
    <div className={styles.telaInicial}>
      <div className={styles.selects}>
        <Select
          options={tiposOptions}
          value={tipoValue}
          change={selectTipoChangedHandler}
        />
        <Select
          options={orderByOptions}
          value={orderByOptionsValue}
          change={selectOrderByChangedHandler}
        />
      </div>
      <div>
        <CorposCelestes
          corposCelestes={corposCelestes}
        />
      </div>
    </div>
  );
}

export default Inicial;
