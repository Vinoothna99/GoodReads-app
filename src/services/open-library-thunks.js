import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBookByWorkID, findBooksBySearchTerm} from "./open-library-service";

export const findBooksThunk = createAsyncThunk('findBooks',
    (searchTerm) => findBooksBySearchTerm(searchTerm));

export const findBookByWorkIDThunk = createAsyncThunk('findBookByWorkID',
    (workID) => findBookByWorkID(workID));