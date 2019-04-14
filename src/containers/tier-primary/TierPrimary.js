import React from 'react';
import PropTypes from "prop-types";
import { List, Search } from '../../components';
import { Container, Group, Logo } from './styles';

const TierPrimary = ({ handleChange }) => (
  <Container>
    <Logo />
    <Group>
      <List text="Insurance" />
      <List text="Aged Care" />
      <List text="Health Services" />
      <List text="Community" />
      <List text="Your Health" />
    </Group>
    <Search width="auto" placeholder="Search" handleChange={handleChange} />
  </Container>
);

TierPrimary.propTypes = {};

export default TierPrimary;
