import { setTheme, toggleTheme } from '@/redux/slices/themeSlice';
import { RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ThemeChanger = () => {
  const isDark = useSelector((state:RootState) => state.theme.isDark);
  const dispatch = useDispatch();

  // Set initial theme based on localStorage or default value
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(storedTheme));
  }, [dispatch]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="tooltip" data-tip={`${isDark ? "Dark Mode" : "Light Mode"}`}>
      <label className="swap swap-rotate btn btn-ghost btn-circle shadow-lg">
        <input
          type="checkbox"
          className="theme-controller"
          checked={isDark}
          onChange={handleToggle}
        />
        <p>{isDark ? "Light" : "Dark"}</p>
      </label>
    </div>
  );
};

export default ThemeChanger;
