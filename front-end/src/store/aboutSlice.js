import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

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

    const dispatch = useDispatch()
    const { aboutMe } = useSelector(store => store.about)

    return {
        aboutMe,
        addAboutMe: (aboutMe) => dispatch(actions.addAboutMe(aboutMe))
    }
}
export default reducer;