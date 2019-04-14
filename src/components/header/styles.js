import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left:0px;
  width: 100%;
  color: white;
  font-size:16px;
  z-index: 9999;
  font-weight: light;
  border-bottom:3px solid ${theme.secondary};
  background: ${theme.primary};
  height:50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  span {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export { Container };