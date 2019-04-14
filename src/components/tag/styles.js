import styled, { keyframes } from 'styled-components';
import theme from 'theme';

const Container = styled.div`
  width:100%;
  padding: 0px;
  margin: 0px;
  * {
    box-sizing: border-box;
  }
`;

const TagContainer = styled.div`
  margin: 0px 4px 6px 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export {
  Container,
  TagContainer,
  TagContainer,
};