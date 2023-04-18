import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { aboutMe: null };

const { actions, reducer } = createSlice({
    name: 'about',
    initialState,
    reducers: {
        addAboutMe: (state, action) => {
            state.aboutMe = action.payload
        }
    }
});

export const useAboutAction = () => {

    const { aboutMe } = useSelector(store => store.about)

    return { aboutMe }
}
export default reducer;