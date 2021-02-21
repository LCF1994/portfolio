import React from 'react'
import PropTypes from 'prop-types';
import { theme } from '../'

export default function Logo({ width, height }){

    return(
        <svg width={width} height={height} viewBox="0 0 150 300"fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 150 L50 160 L5 290 L115 140 L60 125 L100 0 Z" stroke="white" strokeWidth="5" fill={ theme.colors.primary}/>
        </svg>

    )
}

Logo.defaultProps = {
    width: '100%',
    height: 'auto',
}

Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}


