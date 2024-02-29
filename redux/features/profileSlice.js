import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'',
    userDp: null
}

const ProfileSlice = createSlice({
    name:'profile',
    initialState:initialState,
    reducers:{
        addUser: (state , action) => {
            state.userName = '' ,
            state.userName = action.payload.username ,
            state.userDp = action.payload.profileImage
        },
        delUser: (state) => {
            state = []
        }

    }
})

export const {addUser , delUser} = ProfileSlice.actions ;
export default ProfileSlice.reducer