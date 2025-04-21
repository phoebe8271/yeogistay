import * as actionTypes from "./constants"

// 初始化
const initialState = {
    currentPage: 0, // 當前頁碼
    roomList: [], // 房間列表
    totalCount: 0, // 總數據個數

    isLoading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionTypes.CHANGE_ROOMLIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_ISLOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }

}

export default reducer;