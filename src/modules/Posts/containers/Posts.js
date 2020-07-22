import React from 'react';
import { connect } from 'react-redux';
import { Posts } from './../../../components/components';
import PostsActions from './../actions';

class PostsContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    //fetchItems();
  }
  render() {
    return <Posts items={this.props.items} />;
  }
}

export default connect(
  ({ posts }) => posts, 
  PostsActions,
  )(PostsContainer);