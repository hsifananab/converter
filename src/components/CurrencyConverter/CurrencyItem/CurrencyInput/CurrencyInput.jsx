import React from 'react';

import styles from './CurrencyInput.module.css';

const CurrencyInput = props => {
  return (
    <div className={styles.CurrencyInput}>
      <input
        type="number"
        value={props.amount}
        onChange={e => props.onAmountChange(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
