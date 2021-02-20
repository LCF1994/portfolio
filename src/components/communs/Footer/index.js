import styled from 'styled-components'
import { theme } from '../../../theme';
import Icon from '../../foundations/Icon';


const WrapperFooter = styled.div`
    height:15vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;

    background: ${ theme.colors.background };

`;

export default function Footer(){

    const IconsList = [
        {
            icon: 'github-square',
            link: 'https://github.com/LCF1994',
        },
        {
            icon: 'linkedin-in',
            link: 'https://www.linkedin.com/in/lucas-campos-ferreira-673267108/',
        }
    ]

    return(
        <footer>
            <WrapperFooter>
                { IconsList.map(( item )=>(
                    <Icon type={ item } />
                ))}
            </WrapperFooter>
        </footer>
    )
};