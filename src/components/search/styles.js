import styled from 'styled-components';
import theme from '../../theme';

const Input = styled.input`
  width: ${props => props.width ? props.width : '100%'};
  margin:0 auto;
  padding: 10px;
  border: none;
  transition: border 0.3s;
  display: inline-block;
  line-height: 20px;
  border-bottom: 2px solid ${theme.navyBlue};
`;

export { Input };