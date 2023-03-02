import styled from 'styled-components';

export const Section = styled.div`
  color: ${div => div.theme.colors.text};
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${form => form.theme.spaces[5]}px;
`;

export const HeaderSection = styled(Section)`
  background-color: ${div => div.theme.colors.accent};
`;

export const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
