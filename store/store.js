import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from "./login/loginStore"
import { userSlice } from "./users/userApi"

export default configureStore({
    reducer: {
        [loginSlice.name]: loginSlice.reducer,
        [userSlice.name]: userSlice.reducer
    },
})

