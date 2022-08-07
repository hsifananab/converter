import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import styles from './ChangeButton.module.css';

const ChangeButton = () => {
  const currentPath = window.location.href.split('/').at(-1);
  const targetPath = currentPath === 'px-to-rem' ? 'rem-to-px' : 'px-to-rem';

  return (
    // <div>
    <button className={styles.ChangeButton_btn}>
      <NavLink
        className={styles['ChangeButton_btn-link']}
        to={`/${targetPath}`}
      >
        <CgArrowsExchangeAlt />
      </NavLink>
    </button>
    // </div>
  );
};

export default ChangeButton;
