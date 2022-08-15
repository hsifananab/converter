const converters = [
  {
    id: 1,
    path: '/px-to-rem',
    title: 'px-to-rem',
    lable: 'PX to REM converter',
    from: 'PX',
    to: 'REM',
  },
  {
    id: 2,
    path: '/rem-to-px',
    title: 'rem-to-px',
    lable: 'REM to PX converter',
    from: 'REM',
    to: 'PX',
  },
  {
    id: 3,
    path: '/currency-converter',
    title: 'currency-converter',
    lable: 'Currency Converter',
  },
];

export const getConverters = () => converters;
export const getConverter = path =>
  converters.find(converter => path === converter.path);
