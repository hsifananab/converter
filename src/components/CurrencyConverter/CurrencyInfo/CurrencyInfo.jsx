import styles from './CurrencyInfo.module.css';

const CurrencyInfo = props => {
  const fromToRatio = (
    props.rates[props.fromCurrency] / props.rates[props.toCurrency]
  ).toFixed(6);

  const toFromRatio = (
    props.rates[props.toCurrency] / props.rates[props.fromCurrency]
  ).toFixed(6);

  const toFromRatioAccent = Number(toFromRatio).toFixed(2);
  const toFromRatioRest = toFromRatio.slice(-4);

  return (
    <div className={styles.CurrencyInfo}>
      <div className={styles.CurrencyInfo__toFrom}>
        <div className={styles.CurrencyInfo__from}>
          1.00 {props.fromCurrency} =
        </div>
        <div className={styles.CurrencyInfo__to}>
          <span className={styles.CurrencyInfo__accent}>
            {toFromRatioAccent}
          </span>
          {toFromRatioRest}{' '}
          <span className={styles.CurrencyInfo__accent}>
            {' '}
            {props.toCurrency}
          </span>
        </div>
      </div>
      <div className={styles.CurrencyInfo__fromTo}>
        1 {props.toCurrency} = {Number(fromToRatio).toFixed(4)}{' '}
        {props.fromCurrency}
      </div>
    </div>
  );
};

export default CurrencyInfo;
