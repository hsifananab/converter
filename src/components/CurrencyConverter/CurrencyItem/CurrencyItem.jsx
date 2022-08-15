import React from 'react';
import CurrencyDropdown from './CurrencyDropdown/CurrencyDropdown';
import CurrencyInput from './CurrencyInput/CurrencyInput';

import styles from './CurrencyItem.module.css';

const CurrencyItem = props => {
  return (
    <div className={`${styles.CurrencyItem} ${props.extraClass}`}>
      <CurrencyInput
        amount={props.amount}
        onAmountChange={props.onAmountChange}
      />
      <CurrencyDropdown
        currency={props.currency}
        currencies={props.currencies}
        onCurrencyChange={props.onCurrencyChange}
      />
    </div>
  );
};

export default CurrencyItem;
