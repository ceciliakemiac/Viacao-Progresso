import React, { useState } from 'react';

import Input from '../../components/UI/Input';

function Inicial(props) {
  const [options, setOptions] = useState([
    { value: 'planeta', displayValue: 'Planeta' },
    { value: 'estrela', displayValue: 'Estrela' },
    { value: 'constelação', displayValue: 'Constelação' },
    { value: 'galáxia', displayValue: 'Galáxia' },
    { value: 'buraco-negro', displayValue: 'Buraco Negro' },
    { value: 'perdido-no-tempo', displayValue: 'Perdido No Tempo' },
  ]);
  const [value, setValue] = useState('');

  const selectChangedHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <Input
        label={label}
        options={options}
        value={value}
        change={selectChangedHandler}
      />
    </div>
  );
}

export default Inicial;
