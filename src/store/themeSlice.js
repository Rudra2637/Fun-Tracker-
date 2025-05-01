import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    isDarkMode: false,
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme:(state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            state.isDarkMode = !state.isDarkMode;
        }
    }

})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer