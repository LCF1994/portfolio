import styled, { css } from "styled-components";
import { theme } from "../../../theme";
import Text from "../../foundations/Text";


const Container = styled.div`
display:flex;
flex-direction:column;

height: 450px;
width: 80%;

margin-left:auto;
margin-right:auto;

border-radius: 10px;

background-color: ${ theme.colors.backgroundLight };
`;


const CardImageStyle = css`
    display:block;
    height:200px;
    width:auto;
    
    margin: 15px;
    border-radius:5px;
`;

function CardImage({ src }) {
 
    return(
        <img 
            style={ CardImageStyle }
            src={ src }
        />
    )
}

const CardTextContainer = styled.div`
    display:flex;
    flex-direction:column;

    padding:1em;
`;

const DivLine = styled.div`
    height: 2px;
    width:100%;
    margin: auto;
    background-color: ${ theme.colors.primary };
`;

export default function Card({ content }) {
    return(
        <Container>
            <CardImage 
                src={content.url}
            />
            <CardTextContainer>
                <Text
                tag='h2'
                color={ theme.colors.primary }
                variant='cardTitle'
                >
                    {content.title}
                </Text>
                <DivLine />
                <Text
                tag='p'
                variant='cardText'
                >
                    {content.texto}
                </Text>
            </CardTextContainer>
        </Container>
    )
}