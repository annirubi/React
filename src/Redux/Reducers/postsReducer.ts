import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsListType, CardType, LikeStatus } from "../../Constants/@types";
import { setLikeStatusPayload } from "../../Constants/@types";

type PostsReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalOpened: boolean;
  likedPosts: CardsListType;
  dislikedPosts: CardsListType;
  savedPosts: CardsListType;
};

const initialState: PostsReducerState = {
  selectedPost: null,
  isSelectedPostModalOpened: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
};

const postsSlice = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
      state.isSelectedPostModalOpened = true;
    },
    setSelectedPostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostModalOpened = action.payload;
      if (!action.payload) {
        state.selectedPost = null;
      }
    },
    setLikedStatus: (state, action: PayloadAction<setLikeStatusPayload>) => {
      const { card, likeStatus } = action.payload;
      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );
      if (likeStatus === LikeStatus.Like) {
        if (likedIndex === -1) {
          state.likedPosts.push(card);
        } else {
          state.likedPosts.splice(likedIndex, 1);
        }
        if (dislikedIndex > -1) {
          state.dislikedPosts.splice(dislikedIndex, 1);
        }
      } else {
        if (dislikedIndex === -1) {
          state.dislikedPosts.push(card);
        } else {
          state.dislikedPosts.splice(dislikedIndex, 1);
        }
        if (likedIndex > -1) {
          state.likedPosts.splice(likedIndex, 1);
        }
      }
    },
    setSavedStatus: (state, action: PayloadAction<CardType>) => {
      const card = action.payload;
      const savedPostIndex = state.savedPosts.findIndex(
        (post) => post.id === card.id
      );
      if (savedPostIndex === -1) {
        state.savedPosts.push(card);
      } else {
        state.savedPosts.splice(savedPostIndex, 1);
      }
    },
  },
});

export const {
  setSelectedPost,
  setSelectedPostModalVisible,
  setLikedStatus,
  setSavedStatus,
} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
