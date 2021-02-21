import React from 'react'
import styled, { css } from 'styled-components'
import Logo from '../../../theme/Logo';
import Nav from './Nav';
import { theme } from '../../../theme'

const WrapperCabecalho = styled.div`
    background-color: ${ theme.colors.backgroundLight };

    display:flex;
    justify-content: space-around;

    padding-top: 5px;
    padding-bottom: 5px;

    margin-top:2px;
    margin-bottom:2px;
`;


export default function Cabecalho(){
    return(
        <WrapperCabecalho>
            <Logo width='2em' height='5em' />
            <Nav />
        </WrapperCabecalho>
    )
};
