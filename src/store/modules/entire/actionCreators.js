import { getEntireRoomListData } from "@/services/modules/entire"
import * as actionTypes from "./constants"

// 액션 크리에이터 함수 정의, 액션 객체 반환
export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOMLIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

// 控制矇板
export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_ISLOADING,
    isLoading
})


// 비동기 액션, API 호출 후 store 업데이트
export const fetchRoomListAction = (page = 0) => {
    return async (dispatch) => {

        // 현재 currentPage 값을 업데이트 
        dispatch(changeCurrentPageAction(page))
        
        dispatch(changeIsLoadingAction(true)) // API 요청 전 isLoading 상태 true로 변경
        const res = await getEntireRoomListData(page + 1, 12) // API 호출하여 전체 room 리스트 데이터 가져오기
        dispatch(changeIsLoadingAction(false))  // 데이터 받아온 후 isLoading 상태 false로 변경

        // 받아온 데이터를 redux store에 저장
        const roomList = res.data
        const totalCount = res.meta.pagination.total

        dispatch(changeRoomListAction(roomList)) // roomList 데이터 store에 dispatch
        dispatch(changeTotalCountAction(totalCount)) // 전체 room 개수(totalCount) store에 dispatch
    }
}

