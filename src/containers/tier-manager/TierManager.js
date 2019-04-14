import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { connect } from 'react-redux';
// import { tagActions } from '../../actions';
// import TagSelector from '../tag-selector';
import TierPrimary from '../tier-primary';
import { Container } from './styles';

class TierManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
  }
  
  // handleChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
    
  // handleRemove(index) {
  //   if (index === 0) {
  //     this.props.removeTag(index-1); 
  //   }
  //   this.props.removeTag(index);
  // }
  
  // handleSubmit(e) {
  //   e.preventDefault()
  //   this.props.saveTag(this.state.value);
  //   this.setState({
  //     value: '',
  //   });
  // }
    
  render() {
    return (
      <div>
        <Container>
          <TierPrimary />
        </Container>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//     tags: state.tags,
// })

// const mapDispatchToProps = (dispatch) => ({
//     saveTag: data => dispatch(tagActions.saveTag(data)),
//     removeTag: data => dispatch(tagActions.removeTag(data)),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TierManager);

export default TierManager;
