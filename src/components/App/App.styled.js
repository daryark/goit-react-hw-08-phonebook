import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: greenyellow;
  padding: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: '#3e5e00';
  font-weight: 600;
  font-size: 18px;
  display: inline-block;
  margin-top: 5px;
`;
