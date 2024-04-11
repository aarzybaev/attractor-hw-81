import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {AppDispatch} from "../../app/store.ts";
import {updateLink} from "./linksSlice.ts";


export const createLink = createAsyncThunk<void, string, {dispatch: AppDispatch}>(
  'links/create',
   async ( originalUrl: string, thunkAPI) => {

    try {
       const {data: response} = await axiosApi.post('/', {originalUrl});
        thunkAPI.dispatch(updateLink(response));
    } catch (e) {
      console.error(e);
    }

  }
);

