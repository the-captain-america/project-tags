import React from 'react';
import { Item } from './styles';

const List = ({ text, link, role }) => (
  <Item>
    <a
    href={link}
    role={role}
    className="group__item">
      {text}
    </a>
  </Item>
);

export default List;