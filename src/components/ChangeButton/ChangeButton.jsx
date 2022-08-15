import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import styles from './ChangeButton.module.css';

const ChangeButton = () => {
  const currentPath = window.location.hash.slice(2);
  // const targetPath = currentPath === 'px-to-rem' ? 'rem-to-px' : 'px-to-rem';
  let targetPath;

  switch (currentPath) {
    case 'px-to-rem':
      targetPath = 'rem-to-px';
      break;
    case 'rem-to-px':
      targetPath = 'px-to-rem';
      break;
    case 'currency-converter':
      targetPath = 'currency-converter';
    default:
      break;
  }

  return (
    <button className={styles.ChangeButton_btn}>
      <NavLink
        className={styles['ChangeButton_btn-link']}
        to={`/${targetPath}`}
      >
        <CgArrowsExchangeAlt className={styles.ChangeButton__icon} />
      </NavLink>
    </button>
  );
};

export default ChangeButton;
