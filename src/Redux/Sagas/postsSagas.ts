import { takeLatest, all, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getPosts, setPosts } from "../Reducers/postsReducer";
import API from "../utils/api";

function* getPostsWorker(action: PayloadAction<undefined>) {
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error while receiving posts: ", problem);
  }
}

export default function* postsSaga() {
  yield all([takeLatest(getPosts, getPostsWorker)]);
}
