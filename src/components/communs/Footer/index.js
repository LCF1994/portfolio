import styled from 'styled-components'
import Icon from '../../foundations/Icon';


const WrapperFooter = styled.div`
    height:20vh;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`;

export default function Footer(){

    const IconsList = [
        {
            icon: 'github-square',
            link: '/Github',
        },
        {
            icon: 'linkedin-in',
            link: '/linkedIN',
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