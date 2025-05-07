import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        headerConfig: {
            isFixed: false, // 고정 여부
            topAlpha: false // 투명 여부
        }
    },
    reducers: {
        changeHeaderConfigAction(state, { payload }) {
            state.headerConfig = payload
        }
    }
})
export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
// 헤더 설정 관리 (고정, 투명 등)