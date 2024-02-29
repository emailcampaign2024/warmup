import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./features/profileSlice";
import sidebarSlice from "./features/sidebarSlice";

const Store = configureStore({
    reducer:{
        profileSlice,
        sidebarSlice
    }

})

export default Store

