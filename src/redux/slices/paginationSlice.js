import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productPagi: {
    currentPage: 1,
    totalPage: 1,
  },
  blogPagi: {
    currentPage: 1,
    totalPage: null,
  },
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    currentProductPagination: (state, action) => {
      state.productPagi.currentPage = action.payload;
    },
    totalProductPagination: (state, action) => {
      state.productPagi.totalPage = action.payload;
    },
    currentBlogPagination: (state, action) => {
      state.blogPagi.currentPage = action.payload;
    },
    totalBlogPagination: (state, action) => {
      state.blogPagi.totalPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentProductPagination, totalProductPagination , currentBlogPagination , totalBlogPagination } =
  paginationSlice.actions;

export default paginationSlice.reducer;
