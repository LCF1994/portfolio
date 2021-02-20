import React from 'react'
import styled, { css } from 'styled-components'
import Logo from '../../../theme/Logo';
import Nav from './Nav';
import { theme } from '../../../theme'

const WrapperCabecalho = styled.div`
    background-color: ${ theme.colors.background };

    display:flex;
    justify-content: space-around;
`;


export default function Cabecalho(){
    return(
        <WrapperCabecalho>
            <Logo width='2em'/>
            <Nav />
        </WrapperCabecalho>
    )
};
