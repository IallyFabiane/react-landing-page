/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Heading } from '../Heading/style';

export const Container = styled.div`
  ${({ theme, background }) => css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: ${theme.spacings.large};

  @media ${theme.media.lteMedium} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${Title} { //estilo por herança!
    margin-bottom: ${theme.spacings.xlarge};
    color: ${background ? theme.colors.lightBg : theme.colors.secondaryColor}
  }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  @media ${theme.media.lteMedium} {
    margin-bottom: ${theme.spacings.large};
  }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
