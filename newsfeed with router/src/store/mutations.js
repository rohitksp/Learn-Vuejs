export default {
  loading: (state, status) => (state.loadingStatus = status),
  setPostData: (state, posts) => (state.posts = posts)
}
