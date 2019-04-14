import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
width:100%;
padding: 0px;
margin: 0px;
* {
  box-sizing: border-box;
}
`;

const SectionCreate = styled.section`
padding: 25px;
width:400px;
background: white;
border-radius: 4px;
position: relative;
box-shadow: 3px 0px 15px 3px rgba(0, 0, 0, 0.14);
display:flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
> h1 {
  font-size: 14px;
  text-align: left;
}
> p {
  text-align: left;
}
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

const InputBox = styled.input`
  &:focus {
  outline: none;
  border-bottom: solid 2px ${theme.primary};
  }
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  width: 97%;
  padding: 10px;
  padding-left:0px;
  font-size: 16px;
  padding-bottom:3px;
  border: none;
  border-bottom: solid 2px ${theme.primary};
  transition: border 0.3s;
  &::input-placeholder {
    color:#999;
  }
`;

const ButtonSubmit = styled.button`
  color: white;
  float:right;
  border:none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: lighter;
  font-size: 14px;
  padding: 5px 10px;
  border-bottom: 3px solid ${theme.secondary};
  background-color:${theme.primary};
  &:focus {
    outline: none;
  }
  &:hover{
    background-color:${theme.secondary};
  }
`;

const Row = styled.div`
  display:flex;
  width:100%;
  padding-top:7px;
  padding-bottom:7px;
  margin-top:7px;
  margin: 0 auto;
  position: relative;
  border-radius: 3px;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
`;

const List = styled.li`
margin-bottom: 10px;
`;

const GroupList = styled.ul`
list-style: none;
margin: 0px;
padding: 0;
width: 100%;
`;

export {
  Row,
  Form,
  Container,
  SectionCreate,
  GroupList,
  List,
  ButtonSubmit,
  InputBox
};