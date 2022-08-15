import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';

import styles from './CurrencyDropdown.module.css';

const CurrencyDropdown = props => {
  const [isActive, setIsActive] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isActive]);

  return (
    <div className={styles.CurrencyDropdown} ref={ref}>
      {isActive && (
        <div className={styles.CurrencyDropdown__content}>
          {props.currencies.map(currency => (
            <div
              key={currency}
              className={styles.CurrencyDropdown__item}
              onClick={e => {
                props.onCurrencyChange(currency);
                setIsActive(false);
              }}
            >
              {currency}
            </div>
          ))}
        </div>
      )}
      <div
        className={styles.CurrencyDropdown__button}
        onClick={() => setIsActive(!isActive)}
      >
        {props.currency}
        <TbChevronDown className={styles.CurrencyDropdown__chevron} />
      </div>
    </div>
  );
};

export default CurrencyDropdown;
