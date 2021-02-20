import styled from 'styled-components'

export default function Nav(){
    const Sections = ['Home', 'Projects', 'Contact']
    return(
        <nav>
            <ul>
                { Sections.map((section)=>{
                    return <li>{ section }</li>
                })}
            </ul>
        </nav>
    )
}