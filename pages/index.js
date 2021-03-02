import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../src/components/communs/Cabecalho';
import Capa from '../src/components/communs/Capa';
import Footer from '../src/components/communs/Footer';
import Projects from '../src/components/communs/Projetos';

const Box = styled.div`
  display:flex;
  flex-direction:column;
`;

export default function Home() {
  return (
    <Box>
      <Capa />

      <Cabecalho />

      <Projects />

      <Footer />
    </Box>
  );
}
