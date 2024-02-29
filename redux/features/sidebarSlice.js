import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        isOpen: false
    },
    reducers: {
        toggleSidebar: (state , action) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { toggleSidebar } = SidebarSlice.actions ;
export default SidebarSlice.reducer