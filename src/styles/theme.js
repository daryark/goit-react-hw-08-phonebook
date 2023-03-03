// export const theme = {
//   colors: {
//     text: '#0e1015',
//     inverse: '#efefef',
//     secondary: '#bfbfee',
//     delete: '#f62626',
//     accent: '#4a7aff',
//   },
//   spaces: [1, 2, 4, 8, 16, 36, 64, 128],
//   fontSizes: {
//     s: 14,
//     m: 18,
//     l: 24,
//     xl: 36,
//   },
//   fontWeights: {
//     normal: 400,
//     semiBold: 500,
//     bold: 700,
//   },
// };

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4a7aff',
    },
    text: {
      primary: '#0e1015',
    },
  },
  // MuiContainer: {
  //   styleOverrides: {
  //     // Name of the slot
  //     root: {
  //       // Some CSS
  //       fontSize: '1rem',
  //     },
  //   },
  // },
});
