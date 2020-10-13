import React from 'react';

import styles from './Select.module.css';

const Input = (props) => {
  return (
    <div className={styles.select}>
      <select className={styles.formSelect} value={props.value} onChange={props.change}>
        {props.options.map(option => (
          <option
            value={option.value}
            key={option.value} >
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Input;
