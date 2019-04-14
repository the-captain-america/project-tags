import React from 'react';
import styled from 'styled-components';
import { ToolTip } from './styles';

const Tip = ({ tagLabel, tagText }) => (
  <ToolTip className="tool-tip">
    {tagLabel ? `${tagLabel}` : ''}: ${tagText}`}
  </ToolTip>
);

export default Tip;