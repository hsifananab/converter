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
  // {
  //   id: 3,
  //   path: '/rem-to-px',
  //   title: 'jopa-hui-jopa',
  //   lable: 'Jopa Hui Jopa',
  // },
  // {
  //   id: 4,
  //   path: '/rem-to-px',
  //   title: 'hui-jopa-hui',
  //   lable: 'Hui Jopa Hui',
  // },
  // {
  //   id: 5,
  //   path: '/rem-to-px',
  //   title: 'ti-loh-haha',
  //   lable: 'Ti Loh haha',
  // },
];

export const getConverters = () => converters;
export const getConverter = path =>
  converters.find(converter => path === converter.path);
