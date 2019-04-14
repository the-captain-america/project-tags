import React from 'react';
import { Input } from './styles';

const Search = ({ placeholder, width, handleChange }) => (
  <Input 
    width={`${width}`}
    onChange={handleChange} 
    type="text" 
    placeholder={placeholder} />
);

export default Search;