import useLocalStorage from 'use-local-storage';
import { Route, Routes, Navigate } from 'react-router';

import Contacts from './components/Contacts/Contacts';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';

import styles from './App.module.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

const App = () => {
  const defaultDark = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;

  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'light' : 'dark'
  );
  console.log(theme);

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className={styles.App} data-theme={theme}>
      <Header themeHandler={switchTheme} />
      <Routes>
        <Route path="/px-to-rem" element={<Converter from="px" to="rem" />} />
        <Route path="/rem-to-px" element={<Converter from="rem" to="px" />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/" element={<Navigate to="/px-to-rem" replace />} />
      </Routes>
      <Contacts />
      {/* <Outlet /> */}
    </div>
  );
};

export default App;
