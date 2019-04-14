const TipContainer = styled.div`
  display: block;
  &:hover {
  .tool-tip { 
      top: -70px;
      transition: all 0.4s cubic-bezier(1, 0, 0.4, 1.7);
      transform: translateX(-50%) scale(1); 
    }
  }
`;

const ToolTip = styled.div`
width: 125px;
height: 50px;
position: absolute;
top: -50px;
left: 50%;
border-radius: 3px;
background-color: #333;
font-family: Helvetica, Arial, sans-serif;
font-size: 11px;
line-height: 50px;
color: #FFF;
text-align: center;
transform: translateX(-50%) scale(0);
transform-origin: bottom center;
transition: all 0.4s cubic-bezier(1, 0, 0.4, 1);

&:after {
width: 0; 
height: 0; 
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-top: 10px solid #333;
content: '';
display: block;
position: absolute;
left: 50%;
bottom: -10px;
transform: translateX(-50%);
}
`;

export { ToolTip, TipContainer };