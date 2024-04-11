import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import {LinkApi} from "../../type";
import {createLink} from "./linksThunks.ts";

interface LinksSlice {
  item: LinkApi | null;
  createLoading: boolean;
}

const initialState: LinksSlice = {
  item: null,
  createLoading: false
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    updateLink: (state, {payload: link}: PayloadAction<LinkApi>) => {
      state.item = link;
    },
    resetLink: (state) => {
      state.item = null;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(createLink.pending, (state) => {
      state.createLoading = true;
    }).addCase(createLink.fulfilled, (state) => {
      state.createLoading = false;
    }).addCase(createLink.rejected, (state) => {
      state.createLoading = false;
    });
  }
});


export const linksReducer = linksSlice.reducer;
export const selectLinkItem= (state: RootState) => state.links.item;
export const {updateLink, resetLink} = linksSlice.actions;

export const selectLinkCreating = (state: RootState) => state.links.createLoading;