import { css } from 'styled-components';
import { breakpointList } from '..';

export default (breakpointCss) => {
  const breakpointsName = Object.keys(breakpointList);

  return breakpointsName
    .filter(() => Boolean(breakpointCss[breakpointsName]))
    .map(() => css`
        @media only screen and (min-width: ${breakpointCss[breakpointsName]}px) {
        ${breakpointCss[breakpointsName]};
        }
    `);
};
