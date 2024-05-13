import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export const getLocation = (state: RootState) => state.location.pathname;

const locationSlice = createSlice({
    name: 'location', 
    initialState: {
        pathname: '/',
    },
    reducers: {
        setLocation: (state, action) => {
            state.pathname = action.payload;
        }
    }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;

export interface LocationState {
    pathname: string;
}