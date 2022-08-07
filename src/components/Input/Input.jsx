import styles from './Input.module.css';

const Input = ({ onChange, defaultValue, label }) => {
  const valueChangeHandler = ev => {
    onChange(ev.target.value);
  };

  const handleFocus = ev => ev.target.select();

  return (
    <div className={styles.Input}>
      <label>{label.toUpperCase()}</label>
      <input
        type="number"
        step={label === 'px' ? '1' : '0.1'}
        className={styles.Input__input}
        defaultValue={defaultValue}
        onChange={valueChangeHandler}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default Input;
