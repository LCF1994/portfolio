import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import get from 'lodash/get'


const TextStyle = styled.span`
    text-decoration:none;
    ${propToStyle('color')};

    ${({variant}) => get(theme.fonts, variant)};

    ${propToStyle('marginTop')};
`;

export default function Text({ tag, variant, children, ...prop}){

    return(
        <TextStyle 
        as={tag}
        variant={variant}
        {...prop}
        >
            {children}
        </TextStyle>
    )
}

TextStyle.defaultProps = {
    tag:'p',
    color: theme.colors.secoundary,
}

TextStyle.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span']),
}
