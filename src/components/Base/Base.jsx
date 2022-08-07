import styles from './Base.module.css';

const Base = ({ onChange, defaultBase }) => {
  const baseChangeHandler = ev => {
    onChange(ev.target.value);
  };

  const handleFocus = ev => ev.target.select();

  return (
    <div className={styles.Base}>
      <label>
        Calculation based on a root
        <code className={styles.Base__code}>font-size</code>
        of
        <span className={styles.Base__span}>
          <input
            className={styles.Base__input}
            value={defaultBase}
            type="number"
            min={1}
            max={99}
            step={1}
            onChange={baseChangeHandler}
            onFocus={handleFocus}
          />
        </span>
        pixels.
      </label>
      <div className={styles.test}></div>
    </div>
  );
};

export default Base;
