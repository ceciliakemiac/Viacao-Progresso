import React, { useEffect, useState } from 'react';

import axios from '../../service/axios';
import Select from '../../components/UI/Select';
import CorposCelestes from '../../components/CorposCelestes/CorposCelestes';

function Inicial(props) {
  const [options, setOptions] = useState([
    { value: 1, displayValue: 'Planeta' },
    { value: 2, displayValue: 'Estrela' },
    { value: 3, displayValue: 'Constelação' },
    { value: 4, displayValue: 'Galáxia' },
    { value: 5, displayValue: 'Buraco Negro' },
    { value: 6, displayValue: 'Perdido No Tempo' },
  ]);
  const [value, setValue] = useState(1);
  const [corposCelestes, setCorposCelestes] = useState([]);
  // const [corposCelestes, setCorposCelestes] = useState([
  //   {
  //     name: "Arcturus",
  //     fotoName: "arcturus",
  //     tipo: "estrela"
  //   },
  //   {
  //     name: "Marte",
  //     fotoName: "marte",
  //     tipo: "planeta",
  //   },
  //   {
  //     name: "Vênus",
  //     fotoName: "venus",
  //     tipo: "planeta"
  //   },
  //   {
  //     name: "Vega",
  //     fotoName: "vega",
  //     tipo: "planeta",
  //   },
  //   {
  //     name: "Spica",
  //     fotoName: "spica",
  //     tipo: "estrela",
  //   },
  //   {
  //     name: "Sagittarius A",
  //     fotoName: "sagittariusa",
  //     tipo: "buraco-negro",
  //   },
  //   {
  //     name: "Júpiter",
  //     fotoName: "jupiter",
  //     tipo: "planeta",
  //   },
  //   {
  //     name: "Andromeda",
  //     fotoName: "andromeda",
  //     tipo: "estrela",
  //   }
  // ]);
  // const [filteredCorpos, setFilteredCorpos] = useState([]);

  useEffect(() => {
    let getCorpos = async () => {
      let response = await axios
        .get(`/destinos?tipo=${value}`)
        .catch((error) => console.log(error))
      setCorposCelestes(response.data.data);
    };
    console.log(corposCelestes);
    getCorpos();
  }, [value]);

  const selectChangedHandler = (event) => {
    event.preventDefault();
    console.log('[Initial]', event.target.value);
    setValue(event.target.value);
    console.log('[Initial]', value);
  }

  return (
    <div>
      <Select
        options={options}
        value={value}
        change={selectChangedHandler}
      />
      <CorposCelestes
        corposCelestes={corposCelestes}
      />
    </div>
  );
}

export default Inicial;
