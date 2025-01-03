import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
