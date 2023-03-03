import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    backgroundColor: blue[200],
    width: '100%',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    backgroundColor: red[200],
    width: 600,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: green[200],
    width: 900,
  },
}));

export default function MediaQuery({ children }) {
  return <Root>{children}</Root>;
}
