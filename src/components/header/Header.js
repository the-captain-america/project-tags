import React from 'react';
import PropTypes from "prop-types";
import { Container } from './styles';

const Header = ({ title, subtitle }) => (
  <Container>
    {title}
    <span>{subtitle}</span>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.stirng,
};

export default Header;
