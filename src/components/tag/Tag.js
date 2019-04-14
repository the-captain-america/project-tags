import React from 'react';
import PropTypes from 'prop-types';
import Trim from '../trim';

const Tag = ({ text }) => (
  <span>
    <Trim text={text} length={10} />
  </span>
);

Tag.propTypes = {
  text: PropTypes.string,
};

Tag.defaultProps = {
  text: 'Tag Item',
};

export default Tag;
