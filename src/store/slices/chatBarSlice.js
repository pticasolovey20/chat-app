import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text: 'chat'
}

const chatBarSlice = createSlice({
    name: 'chatBar',
    initialState,
    reducers : {
        setBar(state, action) {
            state.text = action.payload
        }
    }
})

export const {setBar} = chatBarSlice.actions

export default chatBarSlice.reducer