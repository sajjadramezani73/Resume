import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { user: null };

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
});

export const useUserAction = () => {

    const { user } = useSelector(store => store.user)

    return { user }
}
export default reducer;