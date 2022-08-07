import { useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import Menu from '../Menu';
import styles from './MenuButton.module.css';

const MenuButton = () => {
  // useRef
  const ref = useRef();

  const [isOpen, setIsOPen] = useState(false);

  // useEffect
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOPen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  const openMenuHandler = () => setIsOPen(true);
  const closeMenuHandler = () => setIsOPen(false);

  return (
    <div className={styles.MenuButton} ref={ref}>
      {!isOpen && (
        <button className={styles.MenuButton_btn} onClick={openMenuHandler}>
          <HiOutlineMenuAlt2 />
        </button>
      )}
      {isOpen && <Menu onClose={closeMenuHandler} />}
    </div>
  );
};

export default MenuButton;
