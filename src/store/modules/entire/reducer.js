import * as actionTypes from "./constants"

// 각 액션 타입에 따라 해당 state 값 업데이트
const initialState = {
    currentPage: 0, // 현재 페이지 번호
    roomList: [], // 숙소 목록
    totalCount: 0, // 총 개수

    isLoading: false // 로딩 중 여부
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