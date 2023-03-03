import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: 600,
  },
  [theme.breakpoints.up('md')]: {
    width: 900,
  },
}));

export default function MediaQuery({ children }) {
  return <Root>{children}</Root>;
}
