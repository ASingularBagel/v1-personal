import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isMenuOpen: false,
        contentHeight: 0,
    },
    reducers: {
        setMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload;
        },
        setContentHeight: (state, action) => {
            state.contentHeight = action.payload;
        },
    },
});

export const { setMenuOpen, setContentHeight } = uiSlice.actions;
export default uiSlice.reducer;