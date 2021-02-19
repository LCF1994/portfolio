import styled from 'styled-components'
import { theme } from '../../../../theme'


const CapaWrapper = styled.div`
    min-height: 100vh;
    widows: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background: ${theme.colors.background};
`;

export default CapaWrapper;