import { getEntireRoomListData } from "@/services/modules/entire"
import * as actionTypes from "./constants"

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

export const fetchRoomListAction = (page = 0) => {
    return async (dispatch) => {
        // 0. 修改 currentPage
        dispatch(changeCurrentPageAction(page))

        // 1. 根據頁碼獲取最新的數據
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomListData(page + 1, 12) // 網路請求
        dispatch(changeIsLoadingAction(false))

        // 2. 獲取到最新的數據，保存 redux 的 store 中
        const roomList = res.data
        const totalCount = res.meta.pagination.total

        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}

