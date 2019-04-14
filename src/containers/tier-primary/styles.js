import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1050;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  display: inline-block;
  width: 104px;
  height: 80px;
  margin-right: 24px;
  border: 0;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/811583/bupa.svg') no-repeat 0 16px;
  color: transparent;
  font-size: 0;
  line-height: 0;
`;

const Group = styled.ul`
  margin: 0;
  padding: 0;
`;

export { Container, Group, Logo };