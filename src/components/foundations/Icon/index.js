import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


const Link = styled.a`
    font-size: 3em;
    line-height: 1.5em;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;

    &:active,
    &:hover{
        text-shadow: 0 0 .1em black, 0 0 .5em #0A0, 0 0 1em rgb(0, 75, 0);
    }
`

export default function Icon({ type }) {
    
    return(
        <Link href={ type.link }>
            <FontAwesomeIcon icon={[ 'fab', type.icon ]}/>
        </Link>
    )
}