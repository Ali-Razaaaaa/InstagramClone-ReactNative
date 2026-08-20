import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    userPostCount: 0,
    userPosts: [],  // posts created by the logged-in user
  },
  reducers: {
    addUserPost(state, action) {
      state.userPosts.unshift(action.payload);
      state.userPostCount = state.userPosts.length;
    },
    resetUserPosts(state) {
      state.userPosts = [];
      state.userPostCount = 0;
    },
  },
});

export const { addUserPost, resetUserPosts } = postsSlice.actions;
export default postsSlice.reducer;
