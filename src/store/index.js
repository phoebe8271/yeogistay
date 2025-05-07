import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main"
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";


const store = configureStore({
    reducer: {
        main: mainReducer,
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer
    }
})

export default store;
// 여러 slice를 하나의 store로 결합함