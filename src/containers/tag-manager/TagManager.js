import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { connect } from 'react-redux';
import { tagActions } from '../../actions';
import TagSelector from '../tag-selector';

import {
  Container,
  InputBox,
  SectionCreate,
  GroupList,
  ButtonSubmit,
  List,
  Form,
  Row,
} from './styles';

class TagManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
    
  handleRemove(index) {
    if (index === 0) {
      this.props.removeTag(index-1); 
    }
    this.props.removeTag(index);
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.saveTag(this.state.value);
    this.setState({
      value: '',
    });
  }
    
  render() {
    const tags = this.props.tags.map((item, index) => {
      return (
        <TagSelector
          key={index}
          display={true}
          text={item}
          tagType={item}
          onPress={() => this.handleRemove(index)}
        />
      )
    });
    
    const form = (
      <SectionCreate>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
        <GroupList>
          <List>
            <label htmlFor="tag">Tags: </label>
            <InputBox
              type="text"
              placeholder="Enter tag"
              onChange={(e) => this.handleChange(e)}
              value={this.state.value}
              id="tag" />
          </List>
          <List>
            <ButtonSubmit
              onClick={this.handleSubmit}>
              Submit
            </ButtonSubmit>
          </List>
        </GroupList>
        </Form>
      </SectionCreate>
    );
    return (
      <div>
        <Row>{tags}</Row>
        <Row>{form}</Row>
      </div>
    )
  }
}

// const connectManager = {
//   mapStateToProps: state => ({
//     tags: state.tags,
//   }),
//   mapDispatchToProps: dispatch => ({
//     saveTag: data => dispatch(tagActions.saveTag(data)),
//     removeTag: data => dispatch(tagActions.removeTag(data)),
//   }),
// };

const mapStateToProps = (state) => ({
    tags: state.tags,
})

const mapDispatchToProps = (dispatch) => ({
    saveTag: data => dispatch(tagActions.saveTag(data)),
    removeTag: data => dispatch(tagActions.removeTag(data)),
});

// const ConnectTagManager = connect(
//   connectManager.mapStateToProps,
//   connectManager.mapDispatchToProps,
// )(TagManager);

// export default ConnectTagManager;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagManager);

