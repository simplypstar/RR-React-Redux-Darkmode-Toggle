import { configureStore } from "@reduxjs/toolkit";
import modeSlicer from "./features/modeSlice";

const store = configureStore({
    reducer: {
        mode: modeSlicer
    }
})


export default store