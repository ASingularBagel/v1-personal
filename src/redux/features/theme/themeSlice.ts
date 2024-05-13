import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'dark',
        bgColor: 'black'
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setBgColor: (state, action) => {  
            state.bgColor = action.payload;
        }
    },
});

export const { setTheme, setBgColor } = themeSlice.actions;
export default themeSlice.reducer;