import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "searchResults",
  initialState: { list: {}, nowPlayingList: [] },
  reducers: {
    searchResultsRequested: (searchResults, action) => {
      searchResults.loading = true;
    },
    searchResultsReceived: (searchResults, action) => {
      searchResults.list = action.payload.data;
      searchResults.loading = false;
    },
    searchResultsRequestFailed: (searchResults, action) => {
      searchResults.loading = false;
    },
    newSongsListRequested: (searchResults, action) => {
      searchResults.loading = true;
    },
    newSongsListReceived: (searchResults, action) => {
      searchResults.nowPlayingList = action.payload;
      searchResults.loading = false;
    },
    newSongsListRequestFailed: (searchResults, action) => {
      searchResults.loading = false;
    },
  },
});

export const {
  searchResultsRequested,
  searchResultsReceived,
  searchResultsRequestFailed,
  newSongsListReceived,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadsearchResults = (searchQuery) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/search?q=${searchQuery}`,
      method: "get",
      onStart: searchResultsRequested.type,
      onSuccess: searchResultsReceived.type,
      onError: searchResultsRequestFailed.type,
    })
  );
};
export const loadNewSongs = (data) => (dispatch, getState) => {
  dispatch(newSongsListReceived(data));
};
