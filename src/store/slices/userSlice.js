import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    password: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
			state.email = action.payload.email;
			state.password = action.payload.password;
		},

		removeUser(state) {
			state.email = null;
			state.password = null;
		},
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;