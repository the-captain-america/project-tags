import styled from 'styled-components';
import theme from '../../theme';

// const Container = styled.div`
// width:100%;
// padding: 0px;
// margin: 0px;
// * {
//   box-sizing: border-box;
// }
// `;

const Container = styled.div`
margin: 0px 4px 6px 0px;
position: relative;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
box-sizing: border-box;
`;

const BaseTag = styled.div`
  padding: 12px 7px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  margin-top: 0px;
  display: flex;
  vertical-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const PrimaryContainer = BaseTag.extend`
  border: 0;
  background-color: ${theme.base2};
  color: ${theme.primary};
  background: ${theme.base2};
  height: 14px;
  ${props => (props.display === false) && `
    display: none;
  `};
  &:hover {
    background: ${theme.border};
  }
`;

const GoingGoneContainer = BaseTag.extend`
border: 0;
background: ${theme.primary};
color: ${theme.white};
height: 14px;
${props => (props.display === false) && `
  display: none;
`};
&:hover {
  background: ${theme.primary};
}
`;

const EndingSoonContainer = BaseTag.extend`
border: 1px solid ${theme.primary};
background: ${theme.white};
color: ${theme.primary};
height: 14px;
${props => (props.display === false) && `
  display: none;
`};
&:hover {
  background: ${theme.primary};
  color: ${theme.white};
}
`;

export {
  Container,
  EndingSoonContainer,
  GoingGoneContainer,
  PrimaryContainer,
};