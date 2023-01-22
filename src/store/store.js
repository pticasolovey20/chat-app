import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import chatBarReducer from "./slices/chatBarSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatBarReducer,
    },
})