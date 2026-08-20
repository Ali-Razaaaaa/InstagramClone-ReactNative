import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    // Map of postId -> likeCount (delta from initial)
    likedPosts: {},   // postId -> boolean
    likeCounts: {},   // postId -> number (overrides Pexels random)
  },
  reducers: {
    toggleLike(state, action) {
      const { postId, initialCount } = action.payload;
      const wasLiked = state.likedPosts[postId] ?? false;
      state.likedPosts[postId] = !wasLiked;
      const currentCount = state.likeCounts[postId] ?? initialCount;
      state.likeCounts[postId] = currentCount + (wasLiked ? -1 : 1);
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
