import { postsApi } from './utils/api';

const PostsActions = {
  setItems: (items) => ({
    type: 'POSTS:SET_ITEMS',
    payload: items
  }),
  fetchItems: () => dispatch => {
    postsApi.get().then(({ data }) => {
      dispatch(PostsActions.setItems(data));
    })
  }
}

export default PostsActions;