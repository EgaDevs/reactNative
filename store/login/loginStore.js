import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        login: {email: "eve.holt@reqres.in", password: 'city'},
    },
    reducers: {
       setLogin: (state, {payload}) => {
        state.login = payload
       }
    }
})

export const { setLogin } = loginSlice.actions