import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
  loading: false,
  error: false,
  loadingModal: false,
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollectionStart: (state) => {
      state.loading = true;
    },
    addCollectionSuccess: (state, action) => {
      state.collections.push(action.payload);
      state.loading = false;
      state.error = false;
      state.loadingModal = true;
    },
    addCollectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loadingModal = false;
    },
    // getCollectionStart: (state) => {
    //   state.loadingModal = true;
    // },
    getCollectionSuccess: (state, action) => {
      state.collections = action.payload;
      state.loading = false;
      state.error = false;
    },
    getCollectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addCollectionStart,
  addCollectionSuccess,
  addCollectionFailure,
  getCollectionStart,
  getCollectionSuccess,
  getCollectionFailure,
} = collectionSlice.actions;
export default collectionSlice.reducer;
