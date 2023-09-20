import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
  loading: false,
  error: false,
  loadingModal: false,
  cardDetail: null,
  LinkDetails: null,
};

const linksSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    navigateSection: (state, action) => {
      state.cardDetail = action.payload;
    },
    addLinksStart: (state) => {
      state.loading = true;
    },
    addLinksSuccess: (state, action) => {
      state.links.push(action.payload);
      state.loading = false;
      state.error = false;
      state.loadingModal = true;
    },
    addLinksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loadingModal = false;
    },
    getLinksSuccess: (state, action) => {
      state.links = action.payload;
      state.loading = false;
      state.error = false;
    },
    getLinksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLinkId : (state, action) => {
      state.LinkDetails = action.payload;
    }
  },
});

export const {
  navigateSection,
  addLinksStart,
  addLinksSuccess,
  addLinksFailure,
  getLinksStart,
  getLinksSuccess,
  getLinksFailure,
  getLinkId,
} = linksSlice.actions;
export default linksSlice.reducer;
