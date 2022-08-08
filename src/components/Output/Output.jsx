import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import styles from './Output.module.css';

const Output = ({ valueToConvert, base, defaultValue, label }) => {
  const [isValueCopied, setIsValueCopied] = useState(false);

  const pxToRem = valueToConvert / base;
  const remToPx = valueToConvert * base;

  const currentPath = window.location.hash.slice(2);
  const outputValue = currentPath === 'px-to-rem' ? pxToRem : remToPx;

  const handleValueCopy = () => {
    if (outputValue) {
      let timerId = null;
      navigator.clipboard
        .writeText(Math.floor(outputValue * 1000) / 1000)
        .then(() => {
          setIsValueCopied(true);
          timerId = setTimeout(() => {
            setIsValueCopied(false);
            clearTimeout(timerId);
          }, 2000);
        });
    }
  };

  return (
    <div className={styles.Output}>
      <label>{label.toUpperCase()}</label>
      <input
        readOnly
        type="text"
        value={
          outputValue ? Math.floor(outputValue * 1000) / 1000 : defaultValue
        }
        className={styles.Output__input}
        onClick={handleValueCopy}
      ></input>
      <IoCopyOutline
        onClick={handleValueCopy}
        className={styles['Output__input-copy']}
      />
      {isValueCopied && <span className={styles['copied']}>Copied!</span>}
    </div>
  );
};

export default Output;
