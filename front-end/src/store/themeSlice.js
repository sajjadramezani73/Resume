import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const getItem = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
};

const initialState = { theme: getItem('theme') || '' };

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = state.theme === 'dark' ? '' : 'dark'
            localStorage.setItem('theme', state.theme)
        }
    }
});

export const useThemeAction = () => {

    const dispatch = useDispatch()
    const { theme: themeMode } = useSelector(store => store.theme)

    const [theme, setTheme] = useState('');


    useEffect(() => {
        setTheme(themeMode)
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [themeMode]);

    return {
        theme,
        toggleTheme: () => dispatch(actions.toggleTheme())
    }
}
export default reducer;