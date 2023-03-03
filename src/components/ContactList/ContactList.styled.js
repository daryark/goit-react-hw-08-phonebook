import styled from '@emotion/styled';

export const ContactInfo = styled.p`
  font-size: large;
  padding: 15px;
  display: inline-block;
`;

export const ContactItem = styled.li`
  border-bottom: 1px solid grey;
  /* padding-right: 15px;
  padding-left: 0; */
  display: flex;
  align-items: center;
  /* gap: 100px; */
  justify-content: space-between;
`;

// export const DeleteBtn = styled.button`
//   padding: ${button => button.theme.spaces[4]}px;
//   color: ${button => button.theme.colors.secondary};
//   border: none;
//   background-color: transparent;

//   svg {
//     width: ${button => button.theme.fontSizes.m}px;
//     height: auto;
//     display: block;
//     transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   &:hover svg {
//     color: ${button => button.theme.colors.delete};
//   }
// `;
