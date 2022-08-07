import styles from './Menu.module.css';

import { IoClose } from 'react-icons/io5';
import { getConverters } from '../../converters';
import { NavLink } from 'react-router-dom';

const Menu = props => {
  const converters = getConverters();

  return (
    <div className={styles.Menu}>
      <button className={styles.MenuButton_btn} onClick={props.onClose}>
        <IoClose />
      </button>

      <nav className={styles.Menu__navbar}>
        {converters.map(converter => (
          <NavLink
            className={styles['Menu__navbar-item']}
            to={`/${converter.title}`}
            key={converter.id}
            onClick={props.onClose}
          >
            {converter.lable}
          </NavLink>
        ))}
      </nav>

      {/* <Outlet /> */}
    </div>
  );
};

export default Menu;
