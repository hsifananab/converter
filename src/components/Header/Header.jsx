import MenuButton from '../Menu/MenuButton/MenuButton';
import ThemeButton from '../ThemeButton/ThemeButton';
import styles from './Header.module.css';

const Header = props => {
  return (
    <div className={styles.Header}>
      <MenuButton />
      <ThemeButton onClick={props.themeHandler} />
    </div>
  );
};

export default Header;
