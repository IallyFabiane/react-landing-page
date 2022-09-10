import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    ${({ theme }) => css`
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.font.family.Primary};
      background: ${theme.colors.mainBg};;
      margin: ${theme.spacings.margin};
    `}
 }

 h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.font.family.secondary};
}


`;
