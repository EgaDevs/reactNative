import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        userList: [],
    },
    reducers: {
        getAllUsers: (state, {payload} ) => {
            state.userList = payload
        },
        addUser: (state, {payload}) => {
            state.userList.push(payload)
        },
        deleteUser: (state, {payload}) => {
            state.userList = state.userList.filter(el => el.id !== payload)
        }
    }
})

export const { getAllUsers, addUser, deleteUser } = userSlice.actions