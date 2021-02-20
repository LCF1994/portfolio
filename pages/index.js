import styled from 'styled-components'
import Cabecalho from '../src/components/communs/Cabecalho'
import Capa from '../src/components/communs/Capa'
import Footer from '../src/components/communs/Footer'

const Box = styled.div`
  display:flex;
  flex-direction:column;
`;

export default function Home() {
  return (
    <Box>
      <Capa />

      <Cabecalho />

      <Footer />
    </Box>
  )
};
