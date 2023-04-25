import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
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
    const { theme } = useSelector(store => store.theme)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return {
        theme,
        toggleTheme: () => dispatch(actions.toggleTheme())
    }
}
export default reducer;