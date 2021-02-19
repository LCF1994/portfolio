import React from 'react'
import { css } from 'styled-components'

const style = css`
    display:flex;
    
`;

export default function Cabecalho(){
    return(
        <div
        style={style}
        >
            <Logo/>
            <Nav/>
        </div>
    )
};
