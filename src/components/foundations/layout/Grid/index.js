import styled from "styled-components";

const Container= styled.div`
    display:grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;

    width:100%;
    justify-content:center;
    align-items:center;
`;


export const Grid = {
    Container,
}