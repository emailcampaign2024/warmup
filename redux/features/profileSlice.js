import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'',
    userDp: null
}

const ProfileSlice = createSlice({
    name:'profile',
    initialState:{
        user:[]
    },
    reducers:{
        addUser: (state , action) => {
            state.user = '' ,
            state.user = action.payload
        },
        delUser: (state) => {
            state = []
        }

    }
})

export const {addUser , delUser} = ProfileSlice.actions ;
export default ProfileSlice.reducer