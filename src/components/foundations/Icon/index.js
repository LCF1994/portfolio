/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { theme } from '../../../theme';

const Link = styled.a`
    font-size: 3em;

    text-decoration: none;
    margin-left: auto;
    margin-right: auto;

    color: ${theme.colors.secoundary};

    &:active,
    &:hover{
        filter: 
            drop-shadow(0 0 .5em #00A) 
            //drop-shadow(0 0 .1em black) 
            //drop-shadow(0 0 1em rgb(0, 0, 75))
    }
`;

export default function Icon({ type }) {
  return (
    <Link href={type.link}>
      <FontAwesomeIcon icon={['fab', type.icon]} />
    </Link>
  );
}
