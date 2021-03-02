import React from 'react';
import CapaWrapper from './CapaWrapper';
import Text from '../../foundations/Text';
import { theme } from '../../../theme';

export default function Capa() {
  return (
    <CapaWrapper>
      <Text
        tag="h1"
        color={theme.colors.primary}
        variant="title"
      >
        Lucas Campos Ferreira
      </Text>
      <Text
        tag="h1"
        color={theme.colors.secoundary}
        variant="subtitle"
        marginTop="1px"
      >
        Portfolio
      </Text>
    </CapaWrapper>
  );
}
