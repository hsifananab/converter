import { useState } from 'react';

import Base from '../Base/Base';
import ChangeButton from '../ChangeButton/ChangeButton';
import Input from '../Input/Input';
import Output from '../Output/Output';

import styles from './Converter.module.css';

const Converter = props => {
  const [value, setValue] = useState(10);
  const [base, setBase] = useState(16);

  const valueChangeHandler = value => setValue(value);
  const baseChangeHandler = base => (base > 0 ? setBase(base) : setBase(1));

  return (
    <div className={styles.Converter}>
      <h1 className={styles.Converter__title}>
        {props.from.toUpperCase()} to{' '}
        <span className="accent">{props.to.toUpperCase()}</span> converter
      </h1>
      <div className={styles.Converter__inner}>
        <Input
          defaultValue={value}
          onChange={valueChangeHandler}
          label={props.from}
        />
        <ChangeButton />
        <Output
          defaultValue={value}
          valueToConvert={value}
          label={props.to}
          base={base}
        />
      </div>
      <Base defaultBase={base} onChange={baseChangeHandler} />
    </div>
  );
};

export default Converter;
