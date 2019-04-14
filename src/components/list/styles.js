import styled from 'styled-components';
import theme from '../../theme';

const Item = styled.li`
  display: inline-block;
  .group__item {
    display: block;
    width: 70px;
    height: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.navyBlue};
  }
`;

export { Item };