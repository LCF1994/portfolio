/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointList, theme } from '../../../theme';
import Text from '../../foundations/Text';

const CardDefault = css`
    flex-direction:column;
    width: 300px;
`;

const CardDestaque = css`
    @media(min-width:${breakpointList.xs}) {
        grid-row:1;
        width:300px;
    }
    
    @media(min-width: ${breakpointList.lg}) {
        grid-row:auto;
        flex-direction:row;
        grid-column: 1 / span 3;
        width: 1370px;
    }

`;

const Container = styled.div`
display:flex;

${({ destaque }) => (destaque ? CardDestaque : CardDefault)}

height: 450px;
margin: 0 auto;
border-radius: 10px;
background-color: ${theme.colors.backgroundLight};

`;

const CardImageStyle = css`
    display:block;
    
    margin: 15px;
    border-radius:5px;

    ${({ destaque }) => (destaque ? css`
        height:400px;
        width:800px;
    ` : css`
        height:200px;
        width:400px;
    `)}
`;

function CardImage({ src }) {
  return (
    <img
      style={CardImageStyle}
      src={src}
      alt="Imagem"
    />
  );
}

const CardTextContainer = styled.div`
    display:flex;
    flex-direction:column;

    padding:1em;

`;

const DivLine = styled.div`
    height: 2px;
    width:100%;
    margin: 0 auto;
    background-color: ${theme.colors.primary};
`;

export default function Card({ content, destaque }) {
  return (
    <Container destaque={destaque}>
      <CardImage
        src={content.url}
      />
      <CardTextContainer>
        <Text
          tag="h2"
          color={theme.colors.primary}
          variant="cardTitle"
        >
          {content.title}
        </Text>
        <DivLine />
        <Text
          tag="p"
          variant="cardText"
        >
          {content.texto}
        </Text>
      </CardTextContainer>
    </Container>
  );
}
