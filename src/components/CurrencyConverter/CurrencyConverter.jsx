import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import CurrencyItem from './CurrencyItem/CurrencyItem';

import styles from './CurrencyConverter.module.css';
import ChangeButton from '../ChangeButton/ChangeButton';
import CurrencyInfo from './CurrencyInfo/CurrencyInfo';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const [rates, setRates] = useState([]);

  const format = number => Number(number.toFixed(2));

  const handleFromAmountChange = fromAmount => {
    setToAmount(format((fromAmount * rates[toCurrency]) / rates[fromCurrency]));
    setFromAmount(fromAmount);
  };

  const handleFromCurrencyChange = fromCurrency => {
    setToAmount(format((fromAmount * rates[toCurrency]) / rates[fromCurrency]));
    setFromCurrency(fromCurrency);
  };

  const handleToAmountChange = toAmount => {
    setToAmount(format((fromAmount * rates[toCurrency]) / rates[fromCurrency]));
    setToAmount(toAmount);
  };

  const handleToCurrencyChange = toCurrency => {
    setToAmount(format((fromAmount * rates[toCurrency]) / rates[fromCurrency]));
    setToCurrency(toCurrency);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.currencyscoop.com/v1/latest?api_key=3b0364572abe4a125907a11445bf7d90`
      )
      .then(response => setRates(response.data.response.rates));
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length !== 0) {
      handleFromAmountChange(1);
    }
  }, [rates]);

  return (
    <div className={styles.CurrencyConverter}>
      <h1>
        <span className="accent">Currency</span> Converter
      </h1>
      <div className={styles.CurrencyConverter__inner}>
        <CurrencyItem
          currencies={Object.keys(rates)}
          currency={fromCurrency}
          amount={fromAmount}
          onCurrencyChange={handleFromCurrencyChange}
          onAmountChange={handleFromAmountChange}
        />
        <ChangeButton />
        <CurrencyItem
          extraClass="accented-output"
          currencies={Object.keys(rates)}
          currency={toCurrency}
          amount={toAmount}
          onCurrencyChange={handleToCurrencyChange}
          onAmountChange={handleToAmountChange}
        />
      </div>
      <CurrencyInfo
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        rates={rates}
      />
    </div>
  );
};

export default CurrencyConverter;
