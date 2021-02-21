import React from 'react';
import styled from 'styled-components';
import { CardList } from '../../../../db';
import { theme } from '../../../theme';
import { Grid } from '../../foundations/layout/Grid';
import Card from '../Card';
import SectionTitle from './SectionTitle';

const WrapperProjects = styled.section`
    min-height:100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: ${ theme.colors.background };
`;

export default function Projects(){

    return(
        <WrapperProjects>
            <SectionTitle />
            <Grid.Container>
                <Card content={ CardList[0] } />
                <Card content={ CardList[1] } />
                <Card content={ CardList[2] } />
              
            </Grid.Container>
        </WrapperProjects>
    )
}