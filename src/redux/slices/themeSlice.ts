import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: localStorage.getItem('theme') === 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      const newTheme = state.isDark ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', state.isDark);
      document.documentElement.setAttribute('data-theme', state.isDark ? 'customdark' : 'customlight');
      localStorage.setItem('theme', newTheme);
    },
    setTheme: (state, action) => {
      state.isDark = action.payload === 'dark';
      document.documentElement.classList.toggle('dark', state.isDark);
      document.documentElement.setAttribute('data-theme', state.isDark ? 'customdark' : 'customlight');
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
