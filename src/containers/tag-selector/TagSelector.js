import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

import {
	Primary,
	EndingSoon,
	GoingGone,
} from './TagList';
import {
	Container,
} from './styles';

class TagSelector extends Component {
  render() {
    const { tagType } = this.props;
    
    const tagTypes = {
      primary: 'primary',
    };

	  let Placeholder;
    const defaultPlaceholder = <Primary {...this.props} />;
        
    switch(tagType) {  
      case tagTypes.primary: {
        Placeholder = <Primary {...this.props} />;
        break;
      }
			default:
				return defaultPlaceholder;
		}
  
    return (
      <Container onClick={this.props.onPress}>
        {Placeholder}
      </Container>
    )
  }
}

export default TagSelector;
