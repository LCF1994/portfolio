import styled from 'styled-components'


const ListHorizontal = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items: center;

    list-style: none;

    & li{
        font-size: 24px;
        padding-left:15px;
    }

    & a{
        color: white;
        text-decoration:none;
    } 
`;

export default function Nav(){

    const Sections = [
        {
            name:'Home',
            link:'/'
        }, 
        {
            name:'Projects',
            link:'/projects'
        },
        {
            name:'Contact',
            link:'/contact'
        },
    ]

    return( 
        <ListHorizontal>
            { Sections.map((section)=>{
                return (
                <li>
                    <a href={section.link}
                    >{ section.name }</a>
                </li>
                )
            })}
        </ListHorizontal> 
    )
}