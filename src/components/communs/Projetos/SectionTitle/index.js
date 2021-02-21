import React from 'react'
import { theme } from '../../../../theme'
import Text from '../../../foundations/Text'


export default function SectionTitle() {

    return(
        <Text 
            tag='h1'
            color= { theme.colors.secoundary }
            font-size='72px'
        >
            Projetos
        </Text>
    )
}
