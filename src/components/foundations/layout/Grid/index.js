import styled from 'styled-components';
import { breakpointList } from '../../../../theme';

const Container = styled.div`
    display:grid;

    grid-template-columns: auto;
    grid-gap: 1em;

    width:80%;
    justify-content:center;
    align-items:center;

    margin:auto;

    @media(min-width: ${breakpointList.lg}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default {
  Container,
};
