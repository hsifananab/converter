import { VscColorMode } from 'react-icons/vsc';

import styles from './ThemeButton.module.css';

const ThemeButton = props => {
  return (
    <div className={styles.ThemeButton}>
      <button
        className={`${styles.ThemeButton_btn} ${styles.dark}`}
        onClick={props.onClick}
      >
        <VscColorMode />
      </button>
    </div>
  );
};

export default ThemeButton;
